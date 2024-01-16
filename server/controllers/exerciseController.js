const exerciseModel = require('../models/exerciseModel');

const fetchMyExercises = async(req,res) =>{
    const {email} = req.body;

    let findDoc = await exerciseModel.findOne({email});

    if(!findDoc){
        return res.json("msg:No suggested exercises found, please upload pdf report for suggestions");
    }

    return res.json({"data":findDoc});
}

const addSuggestedExercisesFromPdf = async(req,res) =>{
    const {email,bodyPartsData} = req.body;

    let findDoc = await exerciseModel.findOne({email});
    
    //DATE LOGIC
    let objectDate = new Date();

    let day = objectDate.getDate();
    console.log(day); 

    let month = objectDate.getMonth();
    console.log(month + 1);

    let year = objectDate.getFullYear();
    console.log(year);

    let format = month + "/" + day + "/" + year;

    if(!bodyPartsData) return res.json({"msg":"No body parts data feeded"});

    //Making new BodyParts suggested array
    let newSuggestedArray = [];
    for(let i=0;i<bodyPartsData.length;i++){
        if(bodyPartsData[i].body_parts){
         for(let j=0;j<bodyPartsData[i].body_parts.length;j++){
             newSuggestedArray.push(bodyPartsData[i].body_parts[j]);
         }
        }
     }

    if(!findDoc){
        //now add in the new exercises
        const newDoc = new exerciseModel({
            email:email,
            date:format,
            suggestedBodyParts:newSuggestedArray,
            suggestedExercises: []
        });

        await newDoc.save();
        return res.json({"data":newDoc});
    }else if(findDoc && findDoc.suggestedExercises.length !=0 ){
        findDoc.suggestedBodyParts = newSuggestedArray;
        findDoc.suggestedExercises = [];

        await findDoc.save();
        return res.json({"data":findDoc});
    }
    
    return;
}

const saveToMyList = async(req,res) => {
    const {email,exercise} = req.body;
    const doc = await exerciseModel.findOne({email});

    if(!doc){
        return res.json({"msg":"user not found"});
    }

    //add exercise to user's list
    let newExercises = [];
    if(doc.suggestedExercises.length == 0){
        newExercises.push([exercise,{"done":false}]);
        doc.suggestedExercises = newExercises;
        await doc.save();
        return res.json({"msg":"exercise added","data":doc});
    }else{
        //check wether this exercise  is already present or not
        let isPresent = false;
        for(let i=0;i<doc.suggestedExercises.length;i++){
            console.log('NEEDED ->',doc.suggestedExercises[i][0])
            if(doc.suggestedExercises[i][0].name == exercise.name){
                console.log('same');
                isPresent = true;
            }
        }

        if(isPresent == true){
            return res.json({"msg":"exercise is already present inside DB"});
        }else{
            doc.suggestedExercises.push([exercise,{"done":false}]);
            await doc.save();

            return res.json({"msg":"exercise added","exercise":exercise});
        }
    }
}

const markComplete = async(req,res) =>{
    const {exerciseName,email} = req.body;

    let findDoc = await exerciseModel.findOne({email});
    
    let exercisesData = [];
    for(let i=0;i<findDoc.suggestedExercises.length;i++){
        if(findDoc.suggestedExercises[i][0].name == exerciseName){
            // console.log('FOUND -> ',findDoc.suggestedExercises[i][1].done)
            // findDoc.suggestedExercises[i][1].done = true;
            exercisesData.push([findDoc.suggestedExercises[i][0],{"done":true}]);
        }else{
            exercisesData.push(findDoc.suggestedExercises[i]);
        }
    }

    let copy = new exerciseModel({
        email:findDoc.email,
        date:findDoc.date,
        suggestedBodyParts:findDoc.suggestedBodyParts,
        suggestedExercises:exercisesData
    })

    //delete old document
    await exerciseModel.deleteOne({email});
    
    //putting in the new document
    await copy.save();

    return res.json({"msg":"marked exercise as completed","doc":copy});
}

const markNotComplete = async(req,res) =>{
    const {exerciseName,email} = req.body;

    let findDoc = await exerciseModel.findOne({email});
    
    let exercisesData = [];
    for(let i=0;i<findDoc.suggestedExercises.length;i++){
        if(findDoc.suggestedExercises[i][0].name == exerciseName){
            // console.log('FOUND -> ',findDoc.suggestedExercises[i][1].done)
            // findDoc.suggestedExercises[i][1].done = true;
            exercisesData.push([findDoc.suggestedExercises[i][0],{"done":false}]);
        }else{
            exercisesData.push(findDoc.suggestedExercises[i]);
        }
    }

    let copy = new exerciseModel({
        email:findDoc.email,
        date:findDoc.date,
        suggestedBodyParts:findDoc.suggestedBodyParts,
        suggestedExercises:exercisesData
    })

    //delete old document
    await exerciseModel.deleteOne({email});
    
    //putting in the new document
    await copy.save();

    return res.json({"msg":"marked exercise as not completed","doc":copy});
}

const removeFromList = async(req,res) =>{
    const {exerciseName,email} = req.body;

    let findDoc = await exerciseModel.findOne({email});
    
    let exercisesData = [];
    for(let i=0;i<findDoc.suggestedExercises.length;i++){
        if(findDoc.suggestedExercises[i][0].name == exerciseName){
            // console.log('FOUND -> ',findDoc.suggestedExercises[i][1].done)
            // findDoc.suggestedExercises[i][1].done = true;
            continue;
        }else{
            exercisesData.push(findDoc.suggestedExercises[i]);
        }
    }

    let copy = new exerciseModel({
        email:findDoc.email,
        date:findDoc.date,
        suggestedBodyParts:findDoc.suggestedBodyParts,
        suggestedExercises:exercisesData
    })

    //delete old document
    await exerciseModel.deleteOne({email});
    
    //putting in the new document
    await copy.save();

    return res.json({"msg":"deleted exercise successfully","doc":copy});
}

const checkIfAllComplete = async(req,res) =>{
    const {email} = req.body;

    let allDone = true;

    let findDoc = await exerciseModel.findOne({email});

    if(findDoc.suggestedExercises.length == 0){
        return res.json({done:false});
    }
    
    if(!findDoc.suggestedExercises){
        return res.json({done:false});
    }

    for(let i=0;i<findDoc.suggestedExercises.length;i++){
        if(findDoc.suggestedExercises[i][1].done == false){
            allDone = false;
            break;
        }
    }

    if(allDone == true){
        return res.json({done:true});
    }else{
        return res.json({done:false});
    }
}

module.exports = {fetchMyExercises,addSuggestedExercisesFromPdf,saveToMyList,markComplete,markNotComplete,removeFromList,checkIfAllComplete};