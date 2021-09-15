"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {Number} startingValue starting value to be accumulated
 * @param {Number} increment increments by this number
 * @returns {undefined}
 */


 functionAccumulator(startingValue, increment)
  {    
 //implement this
 this.currentValue = startingValue;
 this.increment = increment;

 this.accumulate = function () {        
 this.currentValue += this.increment;
 return this.currentValue;
   };

 this.report = function () {        
 returnthis.currentValue;
   };
 }        
let accumulator = new Accumulator(5, 10);
accumulator.report();
accumulator.report();
console.log(accumulator.startingValue);

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
  this.aaa = 0;
  this.bbb = 0;
  this.setValues = function (aaa, bbb) {
    this.aaa = aaa;
    this.bbb = bbb;
  };
  this.sum = function () {
    return this.aaa + this.bbb;
  };
  this.mul = function () {
    return this.aaa * this.bbb;
  };

  //implement this
}