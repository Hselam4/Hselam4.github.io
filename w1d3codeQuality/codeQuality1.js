"use strict";
const assert = require("assert");
module.exports={isVowel, computeCommission, calcDownpayment, convertFahrenheit , calcDistance, compoundInterest}; 
    
 
/**
 * 
 * @param {String} str - testing vowels
 * @returns {Boolean} -->true or false
 */
function isVowel(str) {   if( str === "a" || str === "e" || str === "i" 
   || str === "o" || str === "u"){
       return true;
   }else
    return false;
}
/**
 * 
 * @param {Boolean} isSalaried - whether they receieve salary or not
 * @param {Number} salesAmount - amount of sales
 * @returns {number} commission 
 */
function computeCommission(isSalaried, salesAmount){
    //let commission = 0;
    if (isSalaried === true ){
        if(salesAmount < 300 ){
           return  0;
        }else if(salesAmount <= 500){
            return salesAmount*0.01;
        }else 
           return salesAmount*0.02;
        
    }else {
        if(salesAmount < 300 ){
            return 0;
        }else if(salesAmount <= 500){
            return salesAmount*0.02;
        }else
        return salesAmount*0.03;
    }
}

/**
 * 
 * @param {number} cost - cost amount
 * @returns {number} downPayment
 */
function calcDownpayment(cost){
    let downPayment;
    if(cost>=0 && cost<50000 ){
        downPayment = cost*0.05;
    } if(cost>= 50000 && cost<100000){
        downPayment = 2500+0.1*(cost-50000);
    } if(cost>= 100000 && cost<200000){
        downPayment =  7500+0.15*(cost-100000);
    } if(cost>= 200000){
        downPayment =  5000+0.1*(cost-200000);
    }
return downPayment;
}
/**
 * 
 * @param {number} tempInFahrenheit - temprature in fah
 * @returns {number} - temprature in celicius
 */
function convertFahrenheit(tempInFahrenheit){
    let tempInCelicius = (tempInFahrenheit - 32) * 5/9;
    return tempInCelicius;
}
/**
 * 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @returns {number}
 */
function calcDistance (x1 , y1, x2, y2){
    let d = (x2 - x1) ** 2  + (y2 - y1) ** 2
    return Math.sqrt(d);
}
/**
 * 
 * @param {} initialAmount 
 * @param {*} Years
 * @param {*} interest 
 * @returns 
 */
function compoundInterest(initialAmount, Years,interest ){
    let totalPayment = initialAmount*(1+ (interest/100)/12)**(12*Years);
    return totalPayment;
  } 