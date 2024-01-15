const express = require('express');
const app = express();
const cors = require('cors');

require("dotenv").config();
require('./db/config');
const PORT=process.env.PORT

app.use(express.json());
app.use(cors());

const VitalRoutes=require("./routes/vitalDataRoute")
app.use("/vital",VitalRoutes)

const userLoginRoutes = require('./routes/userLoginRoute');
app.use("/login",userLoginRoutes);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})