const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['student','admin'],
        default:'student',
        required:true,
    },
    phoneNo:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:true,
    },
    profile:{
        profileImg:{type:String},
        branch:{type:String},
        address:{type:String,},
        cgpa:{type:String},
        enrolmentNo:{type:String},
        semister:{type:String},
        skills:[{type:String}],
        resume:{type:String},
        resumeName:{type:String}
    }

}, {timestamps:true});

const User = mongoose.model('User' , userSchema);

module.exports = User;