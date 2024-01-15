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

const rapidApiFetch =async(bodyPart)=>{
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        params: {limit: '3'},
        headers: {
          'X-RapidAPI-Key': '49a6667aa7msh48de9f0b760cd1cp1cb90ajsnaf5f8e52cf00',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data;
      } catch (error) {
          console.error(error);
      }
}

const addSuggestedExercisesFromPdf = async(req,res) =>{
    const {email,username,bodyParts} = req.body;

    let findDoc = await exerciseModel.findOne({email});

    if(findDoc){
        //then remove the already existing suggested Exercises
        await exerciseModel.deleteOne({email:email});
    }
    // else{
    //     return res.json({"msg":"Please input pdf report to get exercises suggestion"});
    // }

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
    
    for(let i=0;i<bodyParts.length;i++){
        let val = rapidApiFetch(bodyParts[i]);
        for(let j=0;j<val.length;j++){
            newSuggestedArray.push(val[j]);
        }
    }

    //now add in the new exercises
    const newDoc = new exerciseModel({
        username:username,
        email:email,
        date:format,
        suggestedBodyParts:bodyParts,
        suggestedExercises: newSuggestedArray
    });

    await newDoc.save();

    return res.json({"data":newDoc});
}

module.exports = {fetchSuggestedExercises,addSuggestedExercisesFromPdf};