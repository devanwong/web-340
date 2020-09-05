const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'EMS'));
/*
============================================
; Title: EMS
; Author: Devan Wong
; Date:   5 Sept 2020
; Description: week 5 & 6
;===========================================
*/
//require express, ejs, routes and logger
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

//ejs compiler
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//morgan
app.use(logger("short"));
//routes
app.get("/", function(req, res) {
  res.render("index", {
    title: "Home page",
    message: "Devan's Landing page"
  });
});
//run server
http.createServer(app).listen(8080,function(){
  console.log("Application started on port 8080!");
});
