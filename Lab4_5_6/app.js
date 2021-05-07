const express = require('express')
const app = express()
const path = require('path');
var logger = require('morgan');
const bodyParser = require('body-parser'); 



const port = 5000
//Set Template Engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));




app.get('/', (req, res) => {
 return res.render('index.ejs');
})
 var sinhVien=[{email: 'ducde678@gmail.com', password: '123',hoten:"Nguyễn Đức Đề",Diem:7},
{email: 'quang@gmail.com', password: '123',hoten:"Quang Xeo Lin",Diem:8},
{email: 'khoi@gmail.com', password: '123',hoten:"Khôi Hoàng",Diem:9},
{email: 'aaa@gmail.com', password: '123',hoten:"Văn A",Diem:10},
];
app.post('/sinhvien', (req, res) => {
    let username= req.body.uname;
    let password= req.body.psw;
    
    sinhVien.forEach((user) => {
        if (user.email == username && user.password == password)
        {
           return res.send(user);
        }
        else {
          return  res.status(400).end();
        }
   })   
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})