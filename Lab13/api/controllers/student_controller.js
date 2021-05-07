var students = require('../models/student');

module.exports.GetAllStudent = function (req, res, next) {
    students.find({})
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
        message:
          err.message || "Đã có lỗi xảy ra với student."
        });
            
        
    })
}
module.exports.CreateStudent = (req, res, next) => {
    var student = new students({
        MSSV: req.body.MSSV,
        HoVaTen: req.body.HoVaTen,
        NamSinh: req.body.NamSinh,
        DiemMon1: req.body.DiemMon1,
        DiemMon2: req.body.DiemMon2,
        DiemMon3: req.body.DiemMon3,
        Email: req.body.Email,
        SDT: req.body.SDT
    });
 student
    .save(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Có vài lỗi xảy ra với student."
      });
    });
    
}
module.exports.getOneStudent = (req, res, next) => {
   const id = req.params.id;

  students.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "không tìm thấy student với id=" + id });
      else res.json(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Lỗi tìm với id=" + id });
    }); 
}
module.exports.updateOneStudent = async(req, res, next) => {
    
   try {
        const student = await students.findById(req.params.id).exec()
        student.set(req.body)
        
        const rs = await student.save()
        console.log(rs);
        res.send(rs)
    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports.deleteOneStudent = (req, res, next) => {
const id = req.params.id;

  students.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Không thể xóa student với id=${id}. Có thể student không tìm thấy!`
        });
      } else {
        res.send({
          message: "Student xóa thành công!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Không thể tìm thấy student với id=" + id
      });
    });
}