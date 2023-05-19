const express = require('express');
const router = express.Router();
const Exam = require('../model/exam.js');

router.post('/exams',async(req,res)=>{
    try{
        const exam = new Exam({
            name: req.body.name,
            Date: req.body.Date,
            subject: req.body.subject,
          });
        await exam.save();
        res.status(201).json(exam)
    }catch(error){
        res.status(500).json({error:error.message})
    }
});

router.put('/exams/:id', async (req, res) => {
    try {
      const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(exam);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  router.delete('/exams/:id', async (req, res) => {
    try {
      await Exam.findByIdAndRemove(req.params.id);
      res.json({ message: "student deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/exams', async (req, res) => {
    try {
      const exam = await Exam.find();
      res.json(exam);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/exams/:id', async (req, res) => {
    try {
      const exam = await Exam.findById(req.params.id);
      res.json(exam);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });  
module.exports = router;