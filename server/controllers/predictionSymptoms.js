const SymptomsModel = require("../models/symptomsPredictionModel")

const createSymtomsHistory=async(req,res)=>{
    try{
        console.log(req.body)
        const createDocument=await SymptomsModel.create(req.body)
        res.json(createDocument)
    }catch(err){
        res.json(err.message)
    }
    
}

const getPredictionHistory=async(req,res)=>{
    try{
        console.log(req.body)
        const predictionHistoryList=await SymptomsModel.find({userEmail:req.body.email})
        res.json(predictionHistoryList)

    }catch(err){
        res.json(err.message)
    }
}

module.exports={createSymtomsHistory,getPredictionHistory}