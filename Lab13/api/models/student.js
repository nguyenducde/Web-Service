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
    Email: {
        type: String,
        unique: true,
    
    }
    



});

var Students = mongoose.model('Students', studentSchema, 'SinhVien');
module.exports = Students;