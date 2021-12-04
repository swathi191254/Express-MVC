const express = require('express');

const router = express.Router();

const Student = require("../models/student.model");

router.post("/",async(req,res)=>{
    try{
        const student = Student.create(req.body);
        return res.status(201).send(student);
    }

    catch(err){
        return res.status(500).json({message: err.message});
    }
})

module.exports =  router;