const header = require('../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 1.3'));
/*
============================================
; Title: Exercise 1.3
; Author: Devan Wong
; Date: 9 August 2020
; Description: Modules
;===========================================
*/ 
var url = require("url");

var parsedURL = url.parse('https://www.github.com/devanwong?name=devanwong');
//OUTPUT https:
console.log(parsedURL.protocol);
//OUTPUT www.github.com
console.log(parsedURL.host);
//OUTPUT name=devanwong
console.log(parsedURL.query);