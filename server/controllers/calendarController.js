const calendarModel = require('../models/calendarModel');
const exerciseModel = require('../models/exerciseModel');

const fetchCalendarDates = async(req,res) =>{
    const {email} = req.body;

    const doc = await calendarModel.findOne({email});

    if(!doc){
        return res.json({"msg":"user currently has no dates"});
    }

    console.log(doc);

    return res.json({"data":doc});
}

const addCalendarDate = async(req,res) =>{
    const {email,day,month,year} = req.body;

    const doc = await calendarModel.findOne({email});

    //TIME LOGIC
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    
    if(!doc){
        //check wether all exercises are completed
        const exer = await exerciseModel.findOne({email});
        if(!exer){
            return res.json({"msg":"no exercise hence no date"});
        }

        let newDoc = new calendarModel({
            email:email,
            dates : [day,month,year,currentTime]
        });

        await newDoc.save();

        return res.json({"msg":"new calendar dates started"});
    }

    let newDates = [];
    for(let i=0;i<doc.dates.length;i++){
        if(doc.dates[i][0]==day && doc.dates[i][1]==month && doc.dates[i][2]==year){
            continue;
        }else{
            newDates.push(doc.dates[i]);
        }
    }

    newDates.push([day,month,year,currentTime]);

    //Now we have to find wether there is a prexisting date for the same and if so we will first delete it and add new one
    let newCopy = new calendarModel({
        email:email,
        dates:newDates
    });

    
    await exerciseModel.deleteOne({email});
    await newCopy.save();

    return res.json({"msg":"saved new date successfully",data:newCopy});
}

const deleteCalendarDate = async(req,res) =>{
    const {email,day,month,year} = req.body;

    let doc = await calendarModel.findOne({email});

    if(!doc){
        return res.json({"msg":"user currently has no dates"});
    }

    let copy = new calendarModel({
        email:email,
        username:doc.username,
    })

    let newDates = [];
    for(let i=0;i<doc.dates.length;i++){
        if(doc.dates[i][0] == day && doc.dates[i][1] == month && doc.dates[i][2] == year){
            continue;
        }else{
            newDates.push(doc.dates[i]);
        }
    }

    //PUTTING NEW DATES IN NEW COPY
    copy.dates = newDates;
    //PUTTING NEW TIME IN NEW COPY
    //TIME LOGIC
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    copy.time = currentTime;

    await calendarModel.deleteOne({email});
    await copy.save();

    return res.json({"msg":"saved new date successfully",data:doc});
}


module.exports = {fetchCalendarDates,addCalendarDate,deleteCalendarDate};