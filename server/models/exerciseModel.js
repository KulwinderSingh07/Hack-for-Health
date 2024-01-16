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
        type: [
            // Define the type of elements inside the dates array
            {
                type: [mongoose.Schema.Types.Mixed] // Array of integers
            }
        ]
    }
})
const exerciseModel=mongoose.model("exerciseModel",exerciseSchema)
module.exports=exerciseModel