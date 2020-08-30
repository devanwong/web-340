const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 4.3'));
/*
============================================
; Title:  Exercise 4.3
; Author: Devan Wong
; Date:   29 August 2020
; Description: HTTP Status Codes
;===========================================
*/

//require for express
var express = require("express");
//http module for express 
var http = require("http");
//runs express
var app = express();

//get request for a 404 error.
app.get("/not-found", function(req, res){
    res.status(404);
    res.json({
        error: "Resource not found."
    })
});
//get req for a 200 message. 
app.get("/ok", function(req, res){
    res.status(200);
    res.json({
        message: "Page load correctly."
    })
});
//get req for a 500 error.
app.get("/server-error", function(req, res){
    res.status(500);
    res.json({
        error: "Internal Server Error."
    })
});
//get req for a 501 error.
app.get("/not-implemented", function(req, res){
    res.status(501);
    res.json({
        error: "Page not implemented."
    })
});
//get req for a 503 error.
app.get("/service-unavailable", function(req, res){
    res.status(503);
    res.json({
        error: "Page Service Unavailable."
    })
});
//runs server 
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});
