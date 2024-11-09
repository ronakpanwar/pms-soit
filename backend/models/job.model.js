const mongoose = require('mongoose')


const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirments:[{
        type:String,
        required:true
    }],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    experience:{
      type:Number,
      required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company', 
        required:true
    },

    applications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application', 
    }]

},{timestamps:true});

 const Job = mongoose.model('Job' , jobSchema);

 module.exports = Job