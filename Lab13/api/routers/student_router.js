const express = require('express');
var router = express.Router();
var studentController=require('../controllers/student_controller');
router.get('/', studentController.GetAllStudent);
router.get('/student/:id', studentController.getOneStudent);
router.post('/student', studentController.CreateStudent);
router.put('/student/:id', studentController.updateOneStudent);
router.delete('/student/:id', studentController.deleteOneStudent);
module.exports =router;