const express = require('express');
const router = express.Router();
const Student = require('../model/student');
const Exam = require('../model/exam');
const Result = require('../model/result');
router.get('/reports/students', async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/reports/exams', async (req, res) => {
    try {
      const exams = await Exam.find();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/reports/results/:examId', async (req, res) => {
    try {
      const result = await Result.find({examID:req.params.examId});
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/reports/results/:studentId', async (req, res) => {
    try {
      const result = await Result.find({studentID:req.params.studentId});
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/reports/student-averages', async (req, res) => {
    try {
      const studentAverages  = await Result.aggregate([{
        $group: {_id: "studentID",averageScore: { $avg : "$score"}}},
      {$sort: { averageScore : -1 }}
    ]);
      res.json(studentAverages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports = router;