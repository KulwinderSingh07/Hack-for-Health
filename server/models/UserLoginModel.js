const mongoose=require("mongoose")
const userLoginSchema=mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
})
const userLoginModel=mongoose.model("UserLoginModel",userLoginSchema)
module.exports=userLoginModel