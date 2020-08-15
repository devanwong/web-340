const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Assignment 2.4'));
/*
============================================
; Title:  Assignment 2.4 - EJS Views
; Author: Devan Wong
; Date:   15 August 2020
; Description: Creates a Node.js server and returns
;              the index.ejs page
;===========================================
*/
var express = require("express");
var http = require("http");
var path = require("path");
let app = express();

//accessing a directory folder called views 
app.set("views", path.resolve(__dirname, "views"));

//uses ejs view engine
app.set("view engine", "ejs");
//const port number 
const PORT = 3000;
//connects with index.ejs homepage
app.get("/", function(req, res){
    res.render("index",{
        firstName: "Devan",
        lastName: "Wong",
        address: "1234 California Street"
    });
});

app.get("/about", function(req,res){
    res.render("about",{
        message: "Welcome to my about me page"
    });
});

app.get("/contact", function(req,res){
    res.render("contact",{
        message: "Welcome to my contact page"
    });
});


// creates server for the 8080
http.createServer(app).listen(PORT, function(){
    console.log('EJS-views app started on port ${PORT}');
});
