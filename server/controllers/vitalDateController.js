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
        const currentMonth=new Date().getMonth()
        const currentYear=new Date().getFullYear()
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

module.exports={createVitalData,getLastMonthData}