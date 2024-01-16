const exerciseModel = require('../models/exerciseModel');
const axios = require('axios');

const fetchSuggestedExercises = async(req,res) =>{
    const {email,username} = req.body;

    let findDoc = await exerciseModel.findOne({email});

    if(!findDoc){
        findDoc = await exerciseModel.findOne({username});
    }

    if(!findDoc){
        return res.json("msg:No suggested exercises found, please upload report to see suggested exercises");
    }

    return res.json({"data":findDoc});
}

const addSuggestedExercisesFromPdf = async(req,res) =>{
    const {email,bodyPartsData} = req.body;

    let findDoc = await exerciseModel.findOne({email});

    if(findDoc){
        //then remove the already existing suggested Exercises
        await exerciseModel.deleteOne({email:email});
    }

    //DATE LOGIC
    let objectDate = new Date();

    let day = objectDate.getDate();
    console.log(day); 

    let month = objectDate.getMonth();
    console.log(month + 1);

    let year = objectDate.getFullYear();
    console.log(year);

    let format = month + "/" + day + "/" + year;

    //Fetching exercises from RAPID API
    let newSuggestedArray = [];

    if(!bodyPartsData){
        return res.json("No pdf file feeded for storing body parts in DB");
    }
    
    for(let i=0;i<bodyPartsData.length;i++){
       if(bodyPartsData[i].body_parts){
        for(let j=0;j<bodyPartsData[i].body_parts.length;j++){
            newSuggestedArray.push(bodyPartsData[i].body_parts[j]);
        }
       }
    }

    //now add in the new exercises
    const newDoc = new exerciseModel({
        email:email,
        date:format,
        suggestedBodyParts:newSuggestedArray,
        suggestedExercises: []
    });

    await newDoc.save();

    return res.json({"data":newDoc});
}

module.exports = {fetchSuggestedExercises,addSuggestedExercisesFromPdf};