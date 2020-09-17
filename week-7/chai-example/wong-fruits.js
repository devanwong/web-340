const header = require('../../wong-header.js');
console.log(header.display('Devan', 'Wong', 'Exercise 7.3'));
/*
============================================
; Title:  Exercise 7.2
; Author: Devan Wong
; Date:   17 September 2020
; Description: Demonstrations how to use Chai.
;===========================================
*/
//functions that split arrays with commas.
function fruits(str){
  return str.split(',')
}
//export fruits
module.exports = fruits;
