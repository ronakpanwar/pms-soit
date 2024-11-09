const mongoose = require('mongoose');

const connectDB = async()=>{
 try {
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("mongodb is connected")
    }).catch((error)=>{
        console.log(error)
    })
 } catch (error) {
    console.log(error)
 }
}

module.exports = {
    connectDB ,
}