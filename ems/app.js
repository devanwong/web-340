const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'EMS'));
/*
============================================
; Title: EMS
; Author: Devan Wong
; Date:   17 Sept 2020
; Description: week 5, 6, 7
;===========================================
*/
//require express, ejs, routes, mongo and logger
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var app = express();
var mongoose = require('mongoose');
var Employee = require("./models/employee.js");

//mlab connection
var mongoDB = "mongodb+srv://devthedev:november8@buwebdev-cluster-1.w20ui.mongodb.net/test";
//creating the connections.
mongoose.connect(mongoDB,{
  useNewUrlParser: true,
  useUnifiedTopology: true
  //useMongoClient: true deprecated.
}).then(() => {
  console.log("Connection to the database instance was successful");
}).catch(err => {
  console.log(`MongoDB error: ${err.message}`);
});

//adding promise
mongoose.Promise = global.Promise;

//ejs compiler
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//morgan
app.use(logger("short"));
//helmet
app.use(helmet.xssFilter());
//including css
app.use(express.static(__dirname + '/public'));
//http
app.get("/", function(req, res) {
  res.render("index", {
    title: "Welcome to Fnames Employment Page",
    message: "This is where you insert your employment and see everyone else's",
    description: "This project is to showcase Node, Express and Mongo."
  });
});
//run server
http.createServer(app).listen(8080,function(){
  console.log("Application started on port 8080!");
});
