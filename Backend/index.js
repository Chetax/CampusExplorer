const express=require("express");
const app=express();
app.use(express.json());
require('dotenv').config();
const PORT=process.env.PORT||4000;
//db connect
const DBConnection=require('./config');
DBConnection();

//routes
//1. faculty route
const facultyRoute=require('./Routes/faculty');
app.use("/Faculty",facultyRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server Started At port ${PORT}`);
});