const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Company = require('../models/company.model');
const getDataUri = require('../utils/datauri');
const cloudinary = require('../utils/cloudinary');

const createCompany = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Somthing missing..",
                success: false
            })
        }
        const company = await Company.findOne({ email });
        if (company) {
            return res.status(400).json({
                message: "Company already exsists...",
                success: false
            })
        }
        const hashPassword = await bcrypt.hash(password, 10);

        await Company.create({
            name,
            email,
            password: hashPassword
        })

        return res.status(200).json({
            success: true,
            message: "Company created succesfully..."
        })

    } catch (error) {
        return res.status(500).json({
            message: error,
            success: false
        })
    }
}

const loginCompany = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Somthing missing..",
                success: false
            })
        }

        const company = await Company.findOne({ email });
        if (!company) {
            return res.status(400).json({
                message: "Email is incorrect... or Your company is not created...",
                success: false
            })
        }

        const cheakPassword = bcrypt.compare(password, company.password);
        if (!cheakPassword) {
            return res.status(400).json({
                message: "Password is incorrect...",
                success: false
            })
        }

        const tokenData = {
            Id: company._id
        }
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })

        return res.status(200).cookie('token', token, { maxAge: 1 * 24 * 60 * 60 * 1000, sameSite: 'strict' }).json({
            message: `welcome back...`,
            company,
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: error,
            success: false
        })
    }
}

const updateCompany = async (req, res) => {
    try {
        const id = req.id;
        const { name, address, website, about } = req.body;
        // logo
        const file = req.file;
        const fileUrl = getDataUri(file);
        const cloudresponse = await cloudinary.uploader.upload(fileUrl.content)
        const Logo = cloudresponse.secure_url;

        const formData = { name, address, website, about, Logo };
        const company = await Company.findByIdAndUpdate(id, formData, { new: true });
        if (!company) {
            return res.status(400).json({
                message: "Company Not Found...",
                success: false
            })
        }

        return res.status(200).json({
            success: true,
            company,
            message: "company updated..."
        })


    } catch (error) {
        return res.status(500).json({
            message: error,
            success: false
        })
    }
}

const deleteCompany = async (req, res) => {
    try {
        const companyId = req.params.id;
        await Company.deleteOne({ _id: companyId })

        return res.status(200).json({
            success: true,
            message: "company deleted succesfully..."
        })

    } catch (error) {
        return res.status(500).json({
            message: error,
            success: false
        })
    }
}

const getAllCompnys = async (req, res) => {
    try {
        const companys = await Company.find();
        return res.status(200).json({
            success: true,
            companys
        })

    } catch (error) {
        return res.status(500).json({
            message: error,
            success: false
        })
    }
}


const logOutCompany = (req, res) => {
    try {
        return res.status(200).cookie('token', '', { maxAge: 0 }).json({
            message: 'You Logged Out Successfully..',
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createCompany,
    loginCompany,
    logOutCompany,
    updateCompany,
    deleteCompany,
    getAllCompnys
}