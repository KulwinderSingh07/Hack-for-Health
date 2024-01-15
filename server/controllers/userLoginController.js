const userLoginModel = require('../models/UserLoginModel');

const loginUserFunction = async(req,res) => {
    const {email,password} = req.body;

    const findDoc = await userLoginModel.findOne({email,password});
    if(!findDoc){
        return res.json({"msg":"User not found inside DB","exists":false});
    }

    //else means user exists
    return res.json({"data":"user is present in DB","exists":true});
}

const signUpUserFunction = async(req,res) =>{
    const {email,password,username} = req.body;

    //Email exists check
    const findDoc = await userLoginModel.findOne({email});
    if(findDoc){
        return res.json({"msg":"Same Email already exists","exists":true});
    }

    //Username exists check
    const findDoc2 = await userLoginModel.findOne({username});
    if(findDoc2){
        return res.json({"msg":"Same Username already exists","exists":true});
    }

    //Create User
    const newUser = new userLoginModel({username,email,password});
    await newUser.save();

    //else means user exists
    return res.json({"data":"User Sign Up Successfull","exists":false});
}

module.exports = {loginUserFunction,signUpUserFunction};