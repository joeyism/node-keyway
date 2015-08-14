"use strict";
var expect = require("chai").expect;
require("../index");
var arr = ["one","two"];
var obj = {
    "one":"",
    "two":""
};

describe("keyway", function(){

    describe("Array", function(){
        it("should create an object from an Array", function(done){
            expect(Array.keyway(arr)).to.deep.equal(obj);
            done();
        });
    });
    
    describe("Array.prototype", function(){
        it("should create an object from an Array", function(done){
            expect(arr.keyway()).to.deep.equal(obj);
            done();
        });
    });
});
