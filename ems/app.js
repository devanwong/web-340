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
//require express, ejs, routes, mongo and logger
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();
var mongoose = require('mongoose');
//ejs compiler
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//morgan
app.use(logger("short"));
//including css
app.use(express.static(__dirname + '/public'));
//routes
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
