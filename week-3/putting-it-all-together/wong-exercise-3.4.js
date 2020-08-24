const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 3.4'));
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

//allows ejs in html to be used
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//morgan logger middle ware
app.use(logger("short"));

//routes to homepage/index
app.get("/", function(req, res){
    res.render("index", {
        message: "home page"
    });
});
//routes to about page
app.get("/about", function(req,res){
    res.render("about", {
        message: "about page"
    });
});
//routes to contact page
app.get("/contact", function(req,res){
    res.render("contact", {
        message: "contact page"
    });
});
//routes to products page
app.get("/products", function(req, res){
    res.render("products", {
        message: "products page"
    });
});

//start port.
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080.");
});

