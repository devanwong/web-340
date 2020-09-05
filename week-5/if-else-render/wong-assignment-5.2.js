const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 5.2'));
/*
============================================
; Title:  Exercise 5.2
; Author: Devan Wong
; Date:   5 Sept 2020
; Description: if-else-render
;===========================================
*/
//start express & routes
var express = require("express");
var http = require("http");
var path = require("path");

app = express();

//ejs compliler
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//names used in index.ejs
var name = [
    'Devan',
    'Kimmy',
    'Amy',
    'Lucy',
    'Kane'
];

//routes
app.get('/', function(req, res){
    res.render("index", {
        names:  name
    })
})
//create server
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080!");
});

