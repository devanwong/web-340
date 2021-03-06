const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'EMS'));
/*
============================================
; Title: EMS
; Author: Devan Wong
; Date:   24 Sept 2020
; Description: week 5, 6, 7, 8
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
    title: "Welcome to the Employment Page",
    message: "This is where you insert your employment and see everyone else's",
    description: "This project is to showcase Node, Express and Mongo."
  });
});
app.get("/new", function(req, res){
  res.render('new',{
    title:'Add Employee Name'
  });
});
app.get("/list", function(req,res){
  Employee.find({}, function(error, employees){
    if (error) throw error;
    res.render("list",{
      title: "-- Employee List --",
      employees: employees
    });
    console.log(employees);
  });
});

app.get("/view/:queryName", function(req, res){
  var queryName = req.params['queryName'];
  Employee.find({'name': queryName}, function(error, employees) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(employees);

      if(employees.length > 0) {
        res.render('view', {
          title: 'EMS | View',
          employee: employees
        })
      } else {
        res.redirect('/');
      }
    }
  })
});

app.post("/process", function(req,res){
  console.log(req.body.txtName);
  if(!req.body.txtName){
    res.status(400).send("Entries must have a name");
    return;
  }
  //get the req. form data
  var employeeName = req.body.txtName;
  console.log(employeeName);
  //create employee model
  var employee = new Employee({
    name: employeeName
  });
  //save
  employee.save(function(error){
    if (error) throw error;
    console.log(employeeName + " saved successfully!!")
  });
  res.redirect("/list");
});

//run server
http.createServer(app).listen(8080,function(){
  console.log("Application started on port 8080!");
});
