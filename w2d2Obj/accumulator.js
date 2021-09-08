/*eslintrc disable*/
"use strict";
 
const prompt = require(prompt - sync)();
 
function accumulator(startingValue) {
 this.value = startingValue;
 this.read = function() {
 this.value += +prompt('How much to add?', 0);
 };
}