const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 3.3'));
/*
============================================
; Title:  Exercise 3.3 
; Author: Devan Wong
; Date: 23 August 2020
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
//using morgan middleware
app.use(logger("short"));
// routes
// app.get("/", function (req,res){
//     res.render("index", {
//         message: "This is Morgan Logger"
//     });
// });

//routes to productid 
app.get("/:productId", function(request,response){
    var productId = parseInt(request.params.productId);
    response.render("index", {
        productId: productId
    })
});

//run the server. 
http.createServer(app).listen(3000, function(){
    console.log("This is localhost: 3000!");
});
