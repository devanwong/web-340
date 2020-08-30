const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 4.2'));
/*
============================================
; Title:  Exercise 4.2 
; Author: Devan Wong
; Date:   29 August 2020
; Description: JSON APIs 
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
//takes req, parse and respond with a JSON obj. & HTTP status code.
app.get("/customer/:id", function(req, res) {
    var id = parseInt(req.params.id, 10);
    res.json({
        firstName: "Devan",
        lastName: "Wong",
        employeeId: id
    });
});

//runs server
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});