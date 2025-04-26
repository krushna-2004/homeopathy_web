const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Appointment3")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const PatientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection1", PatientSchema)

module.exports=collection