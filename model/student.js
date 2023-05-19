const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
    },
    Lastname :{
        type:String,
        required:true,
    },
    EmailAddress:{
        type:String,
        required:true,
    },
    BirthDate:{
        type:Date,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
        
    },
    PhoneNumber:{
        type:String,
        required:true,
        
    },
});
const Student = new mongoose.model('student',studentSchema);
module.exports = Student;