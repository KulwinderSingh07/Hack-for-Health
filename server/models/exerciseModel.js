const mongoose=require("mongoose")
const exerciseSchema=mongoose.Schema({
    email:{
        type:String
    },
    date:{
        type:String
    },
    suggestedBodyParts:{
        type:Array
    },
    suggestedExercises:{
        type:Array
    }
})
const exerciseModel=mongoose.model("exerciseModel",exerciseSchema)
module.exports=exerciseModel