const Job = require("../models/job.model");

const createJob = async(req,res)=>{
    try {
        const {title , description , requirments , salary , location , jobType , position , cgpa } = req.body
        if(!title || !description || !requirments || !salary || !location || !jobType || !position || !cgpa){
            return res.status(400).json({
                message:"Somthing missing..",
                success:false
            })
        }
        const companyId = req.id;
        await Job.create({
            title,
            description,
            requirments:requirments.split(","),
            salary,
            location,
            jobType,
            cgpa,
            position,
            company:companyId
        })
         
        return res.status(200).json({
            success:true,
            message:"Job is created succesfullly..."
        })
        
    } catch (error) {
        return res.status(500).json({
            message :error,
            success:false
        })
    }
}

const getAllJobs = async(req,res)=>{
    try {
        const job = await Job.find().populate({path:'company'});
        if(!job){
            return res.status(404).json({
                message:"Job not found...",
                success:false
            })
        }
        return res.status(200).json({
            success:true,
            job
        })
        
    } catch (error) {
        return res.status(500).json({
            message :error,
            success:false
        })
    }
}

const getCompanyJobs = async(req,res)=>{
    try {
        const companyId = req.id;
        const job = await Job.find({company:companyId})
        if(!job){
            return res.status(404).json({
                message:"Job not found...",
                success:false
            })
        }
        return res.status(200).json({
            success:true,
            job
        })
        
    } catch (error) {
        return res.status(500).json({
            message :error,
            success:false
        })
    }
}

// const getJobById = async(req,res)=>{
//     try {
//         const jobId = req.params.id;
//         const job = await Job.findById(jobId).populate({
//             path:'applications',
//             options:{sort:{createdAt:-1}},
//             populate:{
//                 path:'applicant'
//             }
//         })
//         if(!job){
//             return res.status(404).json({
//                 message:"No Applications ",
//                 success:false
//             })
//         }
//         return res.status(200).json({
//             job,
//             success:true
//         })
        
//     } catch (error) {
//         return res.status(500).json({
//             message :error,
//             success:false
//         })
//     }
// }

module.exports = {
    createJob,
    getCompanyJobs,
    getAllJobs
}