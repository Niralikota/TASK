const mongoose = require('mongoose')

const examSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    }
});

const Exam = new mongoose.model('exam',examSchema);
module.exports = Exam;
