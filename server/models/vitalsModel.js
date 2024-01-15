const mongoose=require("mongoose")
const vitalsSchema=mongoose.Schema({
    vitalName:{
        type:String,
        enum:['Heart Rate','Blood Pressure']
    },
    vitalValue:{
        type:Number,
    },
    calculatedDateTime:{
        type:Date,
        default:new Date()
    }
})
const VitalsModel=mongoose.model("VitalsModel",vitalsSchema)
module.exports=VitalsModel