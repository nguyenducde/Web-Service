const express = require('express');
const bodyParser = require('body-parser')
var mongoose = require('mongoose');
const app = express();
const PORT = 5000;
var studentRouter = require('./api/routers/student_router');

app.use(express.json())

//Connect Database 
var configDB = require('./configs/database');

var connectOptions=
{  useFindAndModify:false,
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useCreateIndex: true
}
mongoose.Promise = global.Promise;
mongoose.connect(configDB.url, connectOptions)
  .then(
  () => { 
    console.log('Connected to database');
  },
  err => { 
    console.log('Can\'t connect to database: '+err);
  }
);


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
app.use(studentRouter);
app.get('/', (req, res) => {
    return res.render('index.ejs')
})
