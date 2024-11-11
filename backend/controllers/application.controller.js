const Application = require('../models/application.model')
const Job = require('../models/job.model')
const Company = require('../models/company.model')

const applyJob = async(req,res)=>{
    try {
        const userId = req.id;
        const jobId = req.params.id;
       if(!jobId){
        return res.status(401).json({
            message:"Company id is required..",
            success:false
        })
       }

       const cheakApply = await Application.findOne({job:jobId , applicant:userId});
       if(cheakApply){
        return res.status(400).json({
            message:"you alredy applied..",
            success:false
        })
       };

       const job = await Job.findById(jobId);
       if(!job){
        return res.status(404).json({
            message:"job not found..",
            success:false
        })
       }

       const application = await Application.create({
        job:jobId,
        applicant:userId,

       });
        //  to push applications in job
       job.applications.push(application._id);
       await job.save();
       return res.status(201).json({
        message:"you applied successfully..",
        success:true
       })
        
    } catch (error) {
        console.log(error);
    }
}

const getAllAppliedJob = async(req,res)=>{
    try {
        const userId = req.id;
        const applieds = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        })

        if(!applieds){
            return res.status(404).json({
                message:"No Applied ",
                success:false
            })
        }
        return res.status(200).json({
            applieds,
            success:true
        })
        
    } catch (error) {
        console.log(error);
    }
}

const getApplications = async(req,res)=>{
    try {
        
        const jobId = req.params.id;
        const applications = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        })
        if(!applications){
            return res.status(404).json({
                message:"No Applications ",
                success:false
            })
        }
        return res.status(200).json({
            applications,
            success:true
        })


    } catch (error) {
        console.log(error);
    }
}

const updateStatus = async(req,res)=>{
    try {
        const {status} = req.body;
        const id = req.id;
        const company = await Company.findById(id);
        if(!company){
            return res.status(404).json({
                message:"Your not autherized...",
                success:false
            })
        }
        const applicationId = req.params.id;
        if(!status){
            return res.status(404).json({
                message:"status is required..",
                success:false
            })
        }

        const application = await Application.findById(applicationId);
        if(!application){
            return res.status(404).json({
                message:"application not found..",
                success:false
            })
        }

        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
           message:"Status update successfully..",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}

const getAllApplication = async(req,res)=>{
    try {
        const applicants = await Application.find({ status: 'accepted' })
        .populate({
            path: 'applicant', // Populate student details
            
        })
        .populate({
            path: 'job', // Populate job details
            populate: { 
                path: 'company', // Nested populate to get company details through job
                select: 'name location' // Select specific fields if needed
            }
        });
        if(applicants.length === 0){
          return  res.status(400).json({
                success:false,
                message:"there no appplicants.."
            })
        }
        
        return res.status(200).json({
            success:true,
            applicants
        })
    
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    applyJob,
    getAllAppliedJob,
    getApplications,
    updateStatus,
    getAllApplication
}