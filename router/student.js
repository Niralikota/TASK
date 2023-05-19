const express = require('express');
const router = express.Router();
const Student = require('../model/student.js');


router.post("/students", async (req, res) => {
    try {
      const student = new Student({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        EmailAddress: req.body.EmailAddress,
        BirthDate:req.body.BirthDate,
        Gender: req.body.Gender,
        Address: req.body.Address,
        PhoneNumber: req.body.PhoneNumber
      });
      await student.save();
      res.status(201).json(student);
    } catch (err) {
      res.status(500).json({ error: error.message });
    }
  });
router.put('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/students/:id', async (req, res) => {
  try {
    await Student.findByIdAndRemove(req.params.id);
    res.json({ message: "student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/students/:id', async (req, res) => {
  try {
    const students = await Student.findById(req.params.id);
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
