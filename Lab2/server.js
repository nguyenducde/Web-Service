const express = require("express");
const axios = require("axios");
const app = express();
const { parse } = require('fast-xml-parser');
const request = require('request');

app.use(express.static("public"));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get('/hot-news', (req, res) => {
  res.sendFile(__dirname + '/views/hot-news.html');
});

app.get('/lastest-news', (req, res) => {
  res.sendFile(__dirname + '/views/lastest-news.html')
});

app.get('/detail', (req, res) => {
  res.sendFile(__dirname + '/views/detail.html');
});

app.get('/hot-news/detail', (req, res) => {
  res.sendFile(__dirname + '/views/detail.html');
});

app.get('/lastest-news/detail', (req, res) => {
  res.sendFile(__dirname + '/views/detail.html');
});

app.get('/vnexpress', (request, response) => {
  const { url } = request.query;
  
  const config = {
    method: 'get',
    url: url,
    headers: { 
      'Cookie': 'device_env=4',
      'Accept': 'application/xml'
    }
  }
  
  axios(config)
    .then(res => JSON.stringify(res.data))
    .then(data => {
      let dataParse = parse(data);
      console.log('dataParse', dataParse);
      response.status(200).json(dataParse);
    })
    .catch(err => response.status(500).json(err));
})

app.get('/vnexpress2', (req, res) => {
  const {url} = req.query;
  const options = {
    'method': 'GET',
    'url': url,
    'headers': {
      'Cookie': 'device_env=4'
    }
  };
  
  request(options, function (error, response) {
    if (error) return res.status(500).json(error);
    let dataParse = parse(response.body);
    res.status(200).json(dataParse);
  });
});

// listen for requests :)
const listener = app.listen(8000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
