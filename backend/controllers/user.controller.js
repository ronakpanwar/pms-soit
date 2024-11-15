const User = require("../models/user.model");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const getDataUri = require("../utils/datauri");
const cloudinary = require('../utils/cloudinary')


const register = async(req,res)=>{
    try {
        const {fullname , email , password , phoneNo , role , gender} = req.body;
        if(!fullname || !email || !password  || !phoneNo || !role || !gender){
            return res.status(400).json({
                message:"Somthing missing..",
                success:false
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User is alredy exsist..",
                success:false
            })
        }
        const hashPassword  = await bcrypt.hash(password,10);

        await User.create({
            fullname,
            email,
            password:hashPassword,
            role,
            phoneNo,
            gender
        })

        return res.status(200).json({
            success:true,
            message:"User create succesfully...z"
        })

        
    } catch (error) {
        return res.status(500).json({
            message : error,
            success:false
        })
        
    }
}

const loginUser = async(req,res)=>{
    try {
        const { email , password } = req.body;
        if(!email || !password ){
            return res.status(400).json({
                message:"Somthing missing..",
                success:false
            })
        }

        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"Incorrect email...",
                success:false
            })
        }

        const passwordCheak = await bcrypt.compare(password , user.password);
        if(!passwordCheak ){
            return res.status(400).json({
                message:"Incorrect password...",
                success:false
            })
        }
       
        const tokenData = {
            Id : user._id,
            role : user.role
        }

        const token = jwt.sign(tokenData , process.env.SECRET_KEY , {expiresIn:'1d'});

        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNo:user.phoneNo,
            role:user.role,
            gender:user.gender,
            profile:user.profile
        };
        
        
        return res.status(200).cookie('token',token , {maxAge:1*24*60*60*1000 , sameSite:'strict' }).json({
            message:`welcome back ${user.fullname}`,
            user,
            success:true
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : error,
           
            success:false
        }) 
    }
}

const addSudent = async(req,res)=>{
    try {
        const {fullname , email , password , phoneNo , gender, enrolmentNo } = req.body;
        if(!fullname || !email || !password  || !phoneNo || !gender || !enrolmentNo){
            return res.status(400).json({
                message:"Somthing missing..",
                success:false
            })
        }
        const role = "student"

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User is alredy exsist..",
                success:false
            })
        }
        const hashPassword  = await bcrypt.hash(password,10);

        await User.create({
            fullname,
            email,
            password:hashPassword,
            role,
            phoneNo,
            gender,
            profile:{
                enrolmentNo
            }
        })

        return res.status(200).json({
            success:true,
            message:"Student create succesfully..."
        })
        
    } catch (error) {
        return res.status(500).json({
            message : error,
            success:false
        })
    }
}


const addAdmin = async(req,res)=>{
    try {
        const {fullname , email , password , phoneNo , gender } = req.body;
        if(!fullname || !email || !password  || !phoneNo || !gender ){
            return res.status(400).json({
                message:"Somthing missing..",
                success:false
            })
        }
        const role = "admin"

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User is alredy exsist..",
                success:false
            })
        }
        const hashPassword  = await bcrypt.hash(password,10);

        await User.create({
            fullname,
            email,
            password:hashPassword,
            role,
            phoneNo,
            gender,
        })

        return res.status(200).json({
            success:true,
            message:"Admin create succesfully..."
        })
        
    } catch (error) {
        return res.status(500).json({
            message : error,
            success:false
        })
    }
}


  
const deleteUser = async(req,res)=>{
    try {
        const userId = req.params.id;
        
        await User.deleteOne({_id:userId});

        return res.status(200).json({
            success:true,
            message:"User Delete..."
        })

    } catch (error) {
        return res.status(500).json({
            message : error,
            success:false
        })
    }
}

const getAllStudent = async(req,res)=>{
    try {
        const role = 'student'
        const students = await User.find({role:role});
        return res.status(200).json({
            success:true,
            students
        })
        
    } catch (error) {
        return res.status(500).json({
            message : error,
            success:false
        })
    }
}
const getAllAdmins = async(req,res)=>{
    try {
        const role = 'admin'
        const admins = await User.find({role:role});
        return res.status(200).json({
            success:true,
            admins
        })
        
    } catch (error) {
        return res.status(500).json({
            message : error,
            success:false
        })
    }
}

    const updateProfile = async(req,res)=>{
        try {
            const {fullname , phoneNo , branch , address , skills , semister, cgpa } = req.body;
        
            let skillsArray;
            if(skills){
                skillsArray = skills.split(",");
            }

            const file = req.file;
            const fileUrl = getDataUri(file)
            const cloudresponse = await cloudinary.uploader.upload(fileUrl.content)

            const userId = req.id
            let user = await User.findById(userId);
            if(!user){
                return res.status(400).json({
                    message:"User not found.",
                    success:false
                })
            }

            if(fullname)user.fullname = fullname
            if(phoneNo)user.phoneNo = phoneNo
            if(branch)user.profile.branch = branch
            if(address)user.profile.address = address
            if(skills)user.profile.skills = skillsArray
            if(semister)user.profile.semister = semister
            if(cgpa)user.profile.cgpa = cgpa
            if(cloudresponse){
                user.profile.resume = cloudresponse.secure_url;
                user.profile.resumeName = file.originalname
            }

            await user.save();
        
            user = {
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
                phoneNo:user.phoneNo,
                role:user.role,
                gender:user.gender,
                profile:user.profile
            };

            return res.status(201).json({
                success:true,
                message:"Profile update succesfully...",
                user
            })
            
        } catch (error) {
            return res.status(500).json({
                message : error,
                success:false
            })
        }
    }

const updateImage = async(req,res)=>{
        try {
            const id = req.id;
            const file = req.file;
            const fileUrl = getDataUri(file)
            const cloudresponse = await cloudinary.uploader.upload(fileUrl.content)

            let user = await User.findById(id);
            if (!user) {
                return res.status(404).json({
                  success: false,
                  message: 'User not found',
                });
              }
            
            user.profile.profileImg = cloudresponse.secure_url;
             
            await user.save();

            return res.status(200).json({
                user ,
                success:true ,
                message:'Image upload succesfully...'
            })
            
        } catch (error) {
            return res.status(500).json({
                message : error,
                success:false
            })
        }
}


const logOut = async(req,res)=>{
    try {
        return res.status(200).cookie('token' ,'' ,{maxAge:0}).json({
           message:'You Logged Out Successfully..',
           success:true
        })

   } catch (error) {
       console.log(error) 
   } 
}


module.exports = {
    register,
    loginUser,
    addSudent,
    addAdmin,
    logOut,
    deleteUser,
    getAllAdmins,
    getAllStudent,
    updateProfile,
    updateImage
}