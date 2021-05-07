var mongoose = require('mongoose');


var studentSchema = new mongoose.Schema({
    MSSV: {
        type: String,
        index: true,
        unique: true
    },
    HoVaTen: {
        type: String,
        require: true
    },
    NamSinh: {
        type: String,
       
    },
    DiemMon1: {
        type: Number,
       
    },
    DiemMon2: {
        type: Number,
       
    },
    DiemMon3: {
        type: Number,
       
    },
    Email: {
        type: String,
        unique: true,
    
    },
    SDT: {
        type: String,
        unique: true,
    
    },



});

var Students = mongoose.model('Students', studentSchema, 'SinhVien');
module.exports = Students;