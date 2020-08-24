const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 3.2'));
/*
============================================
; Title:  Exercise 3.2 
; Author: Devan Wong
; Date:   23 August 2020
; Description: Logging 
;===========================================
*/

//require for express
var express = require("express");
//http module for express 
var http = require("http");
var path = require("path");
//required for logging middleware
var logger = require("morgan");
//run express
var app = express();


//tells express to look in the views directory 
app.set("views", path.resolve(__dirname, "views"));
//tells express to use ejs
app.set("view engine", "ejs");
//using morgan logger here.
app.use(logger("short"));
//routes homepage and logs the loggers
app.get("/", function (req,res){
    res.render("index", {
        message: "This is Morgan Logger"
    });
});
//run the server. 
http.createServer(app).listen(8080, function(){
    console.log("This is localhost: 8080!");
});


