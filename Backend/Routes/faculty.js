const express =require('express');
const router=express.Router();
const createFaculty =require('../Controller/CreateFaculty');
const getFaculty=require('../Controller/getFaculty');
router.get('/getFacultyInfo',getFaculty);
router.post("/createFaculty",createFaculty);
module.exports=router;