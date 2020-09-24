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
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var crsf = require("csurf");
var helmet = require("helmet");
var mongoose = require('mongoose');
var Employee = require("./models/employee.js");

//mlab connection
var mongoDB = "mongodb+srv://devthedev:november8@buwebdev-cluster-1.w20ui.mongodb.net/test";

//setup csrf protection
var csrfProtection = crsf({cookie: true});

//run express
var app = express();

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

//use statements
app.use(logger("short")); //morgan
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(helmet.xssFilter()); //helmet
app.use(express.static(__dirname + '/public')); //including css
app.use(function(req, res, next){
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
})

//set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//routing
app.get("/", function(req, res) {
  res.render("index", {
    title: "Welcome to Fnames Employment Page",
    message: "This is where you insert your employment and see everyone else's",
    description: "This project is to showcase Node, Express and Mongo."
  });
});
app.get("/new", function(req, res){
  res.render('new',{
    title:'FMS, New'
  });
});
app.post("/process", function(req,res){
  console.log(req.body.txtName);
  res.redirect("/");
});

//run server
http.createServer(app).listen(8080,function(){
  console.log("Application started on port 8080!");
});
