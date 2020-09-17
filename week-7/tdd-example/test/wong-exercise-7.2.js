const header = require('../../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 7.2'));
/*
============================================
; Title:  Exercise 7.2
; Author: Devan Wong
; Date:   17 September 2020
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

var assert = require("assert");

describe("String#split", function(){
    it("should return an array of fruits", function(){
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});
