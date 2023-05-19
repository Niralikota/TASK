const mongoose = require('mongoose')
const resultSchema = new mongoose.Schema({
    studentID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',

    },
    examID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Exam',
        unique:true,
    },
    score:{
        type:Number,
        required:true
    }
});
const Result = new mongoose.model('result',resultSchema);
module.exports= Result;