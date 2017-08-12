// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer();
// var mongodb = require('mongodb');
// var mongo = require('mongodb').MongoClient;
// var url = "mongodb://testuser:testpass@ds161032.mlab.com:61032/dbimagesearch";
// const Bing = require('node-bing-api')({accKey : 'c9123a83978842fc87a535db22bd2e9a'});
//var util = require('util');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  //base address only entered - go to default page with instructions on use
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/upload", upload.single('file'), function(req, resp){
  
  resp.json("File size = " + req.file.size);
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


