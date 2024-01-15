const mongoose=require("mongoose")
const symptomsSchema=mongoose.Schema({
    Symptoms:{
        type:Array
    },
    predictedDisease:{
        type:String,
    },
    predictionTime:{
        type:Date,
        default:new Date()
    },
    userEmail:{
        type:String
    }
})
const SymptomsModel=mongoose.model("SymptomsModel",symptomsSchema)
module.exports=SymptomsModel