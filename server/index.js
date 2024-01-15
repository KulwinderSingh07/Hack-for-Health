const express = require('express');
const app = express();
const cors = require('cors');

require("dotenv").config();
require('./db/config');
const PORT=process.env.PORT

app.use(express.json());
app.use(cors());

const VitalRoutes=require("./routes/vitalDataRoute")
const SymptomsHistory=require("./routes/predictionSymptomsHistory")
app.use("/vital",VitalRoutes)
app.use("/symptomsPrediction",SymptomsHistory)

const userLoginRoutes = require('./routes/userLoginRoute');
app.use("/login",userLoginRoutes);

const exerciseRoute = require('./routes/exerciseRoute');
app.use("/exercise",exerciseRoute);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})