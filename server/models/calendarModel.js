const mongoose=require("mongoose")
const calendarSchema=mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    dates:{
        type: [
            // Define the type of elements inside the dates array
            {
                type: [mongoose.Schema.Types.Mixed] // Array of integers
            }
        ]
    }
})

//dates -> [day,month,year] -> all values in integer

const calendarModel=mongoose.model("calendarModel",calendarSchema)
module.exports=calendarModel