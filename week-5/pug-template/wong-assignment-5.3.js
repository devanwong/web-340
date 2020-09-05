const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 5.3'));
/*
============================================
; Title:  Exercise 5.3
; Author: Devan Wong
; Date:   5 Sept 2020
; Description: pug-template
;===========================================
*/

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(req, res){
    res.render("index", {
        message: "Hello world this is a PUG WORLD."
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});


