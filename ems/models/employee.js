/*
============================================
; Title:  ems.js
; Author: Devan Wong
; Date:   17 September 2020
; Description: File for the database model
;===========================================
*/
//require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define employee schema
let employeeSchema = new Schema({
  name: {type: String, required: true}
});
//expose employee to files.
var Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
