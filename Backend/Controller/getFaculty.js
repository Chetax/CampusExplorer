
const CreateFacultyModel=require('../Model/Faculty');

const getFaculty=async (req,res)=>{
    
    try{
     const UserData=await CreateFacultyModel.find({});
     res.json({ success: true, data: UserData });
    }catch(err){
        res.status(400).json({"msg":"Error While fatching the data"});
    }
}
module.exports=getFaculty
 