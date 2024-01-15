const VitalsModel = require("../models/vitalsModel")
const VitalList=['Heart Rate','Blood Pressure'] 

const createVitalData=async(req,res)=>{
    try{
        const vitalEntry=await VitalsModel.create(req.body)
        res.json(vitalEntry)

    }catch(err){
        return res.json(err.message)
    }
}

const getLastMonthData= async (req,res)=>{
    try{
        const currentDate = new Date();

        const lastMonthStartDate = new Date(currentDate);
        if(currentDate.getMonth!=0){
            lastMonthStartDate.setMonth(currentDate.getMonth() - 1);
        }else{

            lastMonthStartDate.setMonth(12);
            lastMonthStartDate.setFullYear(currentDate.getFullYear()-1);
        }
        lastMonthStartDate.setDate(1);

        const lastMonthEndDate = new Date(currentDate);
        lastMonthEndDate.setDate(0); 

        // console.log(lastMonthStartDate.getDate()," ",lastMonthEndDate)
        let datasets=[]
        for (let i = 0; i < VitalList.length; i++) {
            console.log(VitalList[i]);
            
            let LastMonthData=await VitalsModel.find({calculatedDateTime:{
                $gte:lastMonthStartDate,
                $lte:lastMonthEndDate
            },
            vitalName:VitalList[i]
        })
        // console.log(LastMonthData)
        let data=LastMonthData.map((val)=>{
            return {x:`${val.calculatedDateTime.getDate()}`,y:val.vitalValue}
        })
        console.log(data)
        let dataSetForGraph={
            data:data,
            label:VitalList[i],
            color:'white',
            borderColor: '#4c71f0',
            backgroundColor: '#00d0c2',
            yAxisID:'y'
        }
        datasets.push(dataSetForGraph)

    }

        res.json(datasets)
    }catch(err){
        res.json(err.message)
    }
}

const monthArr=['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC']

const getLastThreeMonthData=async(req,res)=>{
    try{
        const currentDate = new Date();
        console.log(monthArr[currentDate.getMonth()])

        const lastMonthStartDate = new Date(currentDate);
            lastMonthStartDate.setMonth(currentDate.getMonth() - 3);
        lastMonthStartDate.setDate(1);
        console.log(lastMonthStartDate)

        const lastMonthEndDate = new Date(currentDate);
        lastMonthEndDate.setDate(0); 

        console.log(lastMonthStartDate," ",lastMonthEndDate)
        let datasets=[]
        for (let i = 0; i < VitalList.length; i++) {
            console.log(VitalList[i]);
            
            let LastMonthData=await VitalsModel.find({calculatedDateTime:{
                $gte:lastMonthStartDate,
                $lte:lastMonthEndDate
            },
            vitalName:VitalList[i]
        })
        // console.log(LastMonthData)
        let data=LastMonthData.map((val)=>{
            return {x:`${monthArr[val.calculatedDateTime.getMonth()]}`,y:val.vitalValue}
        })
        console.log(data)
        let dataSetForGraph={
            data:data,
            label:VitalList[i],
            color:'white',
            borderColor: '#4c71f0',
            backgroundColor: '#00d0c2',
            yAxisID:'y'
        }
        datasets.push(dataSetForGraph)

    }

        res.json(datasets)


    }catch(err){
        res.json(err.message)
    }
}

const getLastYearData=async(req,res)=>{
    try{
        const currentDate = new Date();
        console.log(monthArr[currentDate.getMonth()])

        const lastMonthStartDate = new Date(currentDate);
            lastMonthStartDate.setMonth(0);
            lastMonthStartDate.setFullYear(currentDate.getFullYear()-1);
            lastMonthStartDate.setDate(1);
            console.log(lastMonthStartDate)
            
            const lastMonthEndDate = new Date(currentDate);
            lastMonthEndDate.setMonth(11); 
            lastMonthEndDate.setFullYear(currentDate.getFullYear()-1); 
            lastMonthEndDate.setDate(31);


        console.log(lastMonthStartDate," ",lastMonthEndDate)
        let datasets=[]
        for (let i = 0; i < VitalList.length; i++) {
            console.log(VitalList[i]);
            
            let LastMonthData=await VitalsModel.find({calculatedDateTime:{
                $gte:lastMonthStartDate,
                $lte:lastMonthEndDate
            },
            vitalName:VitalList[i]
        })
        // console.log(LastMonthData)
        let data=LastMonthData.map((val)=>{
            return {x:`${monthArr[val.calculatedDateTime.getMonth()]}`,y:val.vitalValue}
        })
        console.log(data)
        let dataSetForGraph={
            data:data,
            label:VitalList[i],
            color:'white',
            borderColor: '#4c71f0',
            backgroundColor: '#00d0c2',
            yAxisID:'y'
        }
        datasets.push(dataSetForGraph)

    }

        res.json(datasets)


    }catch(err){
        res.json(err.message)
    }
}


module.exports={createVitalData,getLastMonthData,getLastThreeMonthData,getLastYearData}