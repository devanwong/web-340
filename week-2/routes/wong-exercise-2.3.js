const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 2.3'));
/*
============================================
; Title:  Exercise 2.3 – Routes
; Author: Devan Wong
; Date:   15 August 2020
; Description: Creates a new server and listens on port 8080.
;===========================================
*/
// required for express
var express = require("express");
var http = require("http");
// express function to start application 
var app = express();
//routes to the homepage 
app.get("/", function(req, res) {
    res.end("Welcome to the homepage!");
});
//routes to the about page
app.get("/about", function(req, res){
    res.end("Welcome to the about page!");
});
//routes to contact page
app.get("/contact", function(req, res){
    res.end("Welcome to the contact page!");
});
//routes for non existing pages
app.use(function(req, res){
    res.statusCode = 404;
    res.end("404!");
});
//run server
http.createServer(app).listen(8080);