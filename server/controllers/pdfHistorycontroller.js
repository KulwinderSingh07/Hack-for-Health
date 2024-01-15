const pdfHistoryDataModel = require("../models/pdfHistoryModel")

const createPdfHistory=async(req,res)=>{
    try{

        const pdfdata=req.body.vitalData
        console.log(pdfdata)

        let vitalList=[]

        for(let i=0;i<pdfdata.length;i++){
            let temp={
                lower_limit:pdfdata[i]?.lower_limit,
                result:pdfdata[i]?.result,
                unit:pdfdata[i]?.unit,
                upper_limit:pdfdata[i]?.upper_limit,
                testName:pdfdata[i]?.testName,
                vitalName:pdfdata[i].test_name
            }
            vitalList.push(temp)
        }

        let FoodItems=[]

        for(let i=0;i<pdfdata.length;i++){
            if('food_items' in pdfdata[i] && 'disease' in pdfdata[i]){
                let temp={
                    foodlist:pdfdata[i].food_items,
                    disease:pdfdata[i].disease
            }
            FoodItems.push(temp)
            }
        }

        const creationModel={
            fileName:req.body.fileName,
            creationDate:new Date(),
            userEmail:req.body.email,
            FoodItems:FoodItems,
            vitalsList:vitalList
        }

        console.log(creationModel)
        const pdfModelCreatedDocument=await pdfHistoryDataModel.create(creationModel)
        res.json(pdfModelCreatedDocument)
    }catch(err){
        res.json(err.message)
    }
}

const getAllPdfHistory=async(req,res)=>{
    try{
        const fetchedPDFHistory=await pdfHistoryDataModel.find({userEmail:req.body.email})
        res.json(fetchedPDFHistory)
    }catch(err){
        res.json(err.message)
    }
}

module.exports={createPdfHistory,getAllPdfHistory}