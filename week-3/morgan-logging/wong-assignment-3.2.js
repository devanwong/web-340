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

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

//tells express to look in the views directory 
app.set("views", path.resolve(__dirname, "views"));
//tells express to use ejs
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function (req,res){
    res.render("index", {
        message: "This is Morgan Logger"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("This is localhost: 8080!");
});


