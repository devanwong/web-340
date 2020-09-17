//fruits js page
var fruits = require("../wong-fruits.js");
//include chai
var chai = require("chai");

var assert = chai.assert;
//testing the actual code.
describe("fruits", function(){
  it("should return an array of fruits", function(){
    var f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });
});


//Mocha is a test runner, so there’s no actual executable that runs. Chai is used to actually test the code.
