const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 4.4'));
/*
============================================
; Title:  Exercise 4.4
; Author: Devan Wong
; Date:   29 August 2020
; Description: CRUD
;===========================================
*/

//require for express
var express = require("express");
//http module for express
var http = require("http");
//morgan
var logger = require("morgan");
//run express
var app = express();
app.use(logger('dev'));


//APP GET
app.get("/", function(req, res){
  res.send('API invoked as an HTTP GET request.');
});
//APP PUT
app.put("/", function(req, res){
  res.send("API invoked as an HTTP PUT request.");
});
//APP POST
app.post("/", function(req, res){
  res.send("API involed as an HTTP POST request");
});
//APP DELETE
app.delete("/", function(req, res){
  res.send("API invoke as an HTTP DELETE request");
});

//runs server
http.createServer(app).listen(8080, function(){
  console.log("Application statred on port 8080!");
});
