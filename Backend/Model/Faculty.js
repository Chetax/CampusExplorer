const mongoose=require('mongoose');
const facultylocation=new mongoose.Schema({
      
    "Name":{
        type:String,
        required:true,
        maxlength:100,
    },
    "Department":{
        type:String,
        required:true,
        maxlength:200,
    },
    "OfficeNumber":{
      type:Number,
      required:true,
    },
    "BuildingNo":{
        type:Number,
        required:true,
    },
    "ContactInformation":{
        type:Number,
    
    },
    "OfficeHours":{
        type:Number,
    },
    "AdditionalNotes":
    {
        type:String,
        required:true,
    },
    "OfficeImage":{
       type:String,
    }
})


module.exports=mongoose.model("Create Faculty",facultylocation);
