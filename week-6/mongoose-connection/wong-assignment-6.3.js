const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 6.3'));
/*
============================================
; Title:  Exercise 6.3
; Author: Devan Wong
; Date:   12 September 2020
; Description: Demonstrates how to setup a MongoDB connection.
;===========================================
*/
//require express, mongoose, morgan
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

//mlab connection
var mongoDB = "mongodb+srv://devthedev:november8@buwebdev-cluster-1.w20ui.mongodb.net/test";
//creating the connections.
mongoose.connect(mongoDB,{
  useNewUrlParser: true,
  useUnifiedTopology: true
  //useMongoClient: true deprecated.
});

//adding promise
mongoose.Promise = global.Promise;

//creatinng a  database variable to hold the connection.
var db = mongoose.connection;

//error handling.
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance");
});

//application
var app = express();
app.use(logger("short"));

//create server
http.createServer(app).listen(8080, function(){
  console.log("Application connected to port 8080!");
})

