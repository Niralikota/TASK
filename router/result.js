const express = require('express');
const router = express.Router();
const Result = require('../model/result.js');
const Student = require('../model/student.js');
const Exam = require('../model/exam.js');


router.post('/results',async(req,res)=>{
    try{
      const {studentID,examID,score} = req.body;

      const student = await Student.findById(studentID);
      const exam = await Exam.findById(examID);

      if(!student || !exam){
        return res.status(404).json({error:"student or exam not found"})
      }
        const result = new Result({
          studentID :student.id,
          examID :exam.id,
          score
        });
        await result.save();
        res.status(201).json(result)
    }catch(error){
        res.status(500).json({error:error.message})
    }
});

router.put('/results/:id', async (req, res) => {
    try {
      const result = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.delete('/results/:id', async (req, res) => {
    try {
      await Result.findByIdAndRemove(req.params.id);
      res.json({ message: "student result deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/results', async (req, res) => {
    try {
      const result = await Result.find();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/results/:id', async (req, res) => {
    try {
      const result = await Result.findById(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });  

  module.exports =router;