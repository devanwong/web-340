const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 1.5'));
/*
============================================
; Title: Exercise 1.5
; Author: Devan Wong
; Date: 9 August 2020
; Description: Hello World
;===========================================
*/ 

var http = require("http");

function processRequest(req, res){
    var body = "Hello World: This is now running on LocalHOST 8080";
    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-type': 'text/plain'
    });
    res.end(body);
}

var s = http.createServer(processRequest);

s.listen(8080);