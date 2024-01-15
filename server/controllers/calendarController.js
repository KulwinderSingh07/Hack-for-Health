const calendarModel = require('../models/calendarModel');

const fetchCalendarDates = async(req,res) =>{
    const {email} = req.body;

    const doc = await calendarModel.findOne({email});

    if(!doc){
        return res.json({"msg":"user currently has no dates"});
    }

    console.log(doc);

    return res.json({"data":doc});
}

module.exports = {fetchCalendarDates};