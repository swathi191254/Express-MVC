
const express = require("express");
const { addListener } = require("..");

const router = express.Router();

const Evaluation = require("../models/evaluation.model");

router.post("/", async(req,res)=>{
    try{

        const evaluation = await Evaluation.create(req.body);

        return res.status(201).send(evaluation);

    } catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
    
})

router.get("/", async(req,res)=>{
    try{

        const evaluations = await Evaluation.find({topic :{$eq:"express"}}).populate("student_id",{user_id :1} ).lean().exec()

        return res.send(evaluations);

    } catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
    
})
