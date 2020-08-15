// required for express
var express = require("express");
// express function to start application 
var http = require("http");

var app = express();

app.use(function(req,res){
    console.log("In comes a request to:" + req.url);
    res.end("Hello world");
});


//start server on localhost 
//http.createServer(app).listen(8080);
//app.listen(8080);
http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080);
});

