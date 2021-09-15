/*1. Write a function, double, that takes a number and returns 2 times 
the number.*/
"use strict";
 
function double(num){
    return num*2;
}
 
console.log("Expected result 4*2 ..will be: 8  = "+double(4));
 
/*2. Write a function times100 that takes a number and 
returns 100 times the number.*/
 
function times100(n){
    return n*100;
}
 console.log("Expected result..2*100 will be : 200  = "+times100(2));
 /**
  3. Write a function, myMap, that takes an array and a function and returns a
 new array that has the function applied to each element of the input array. 
 Use your myMap function with your double and times100 functions.
  */

 let myMap1 = function(array, fn){
     //loop array
     for(let i=0; i<array.length; i++){
         fn(array[i])
     }
     
     //inside the loop fn(element of the array)
 }
let newAyyay = [];
array.forEach(function(element){
    newArray.push(fn(element));
})
console.log(newArray);
   




// function that double an array values....
   
      let arr=[2,3,4,5];
 
 function doubleArr(arr){
     for (let i =0;i<arr.length;i++){
         arr[i]*=2;// arr[i]=arr[i]*2
     }
     return arr;
   // console.log("Expected result ..2,3,4,5 : will be 4,6,8,10" +doubleArr(arr));
 }
console.log("Expected result ..2,3,4,5 : will be 4,6,8,10 = " + doubleArr(arr));
 
function myMap(arr1,double,hunredTimes){
    for(let i=0;i<arr.length;i++){
        arr[i]*=100;
    }
    return arr1;
 
}
 
console.log("Expected result multiply by 2 & then *100..400,600,800,1000 will be =   "+myMap(arr));
/**4. Demonstrate your myMap function with an anonymous function that triples the input value. 
 * Write this as an anonymous function expression. Then write it using an arrow expression. */
// Using function expression 
 let triples1=function(arr1){
     for(let i=0;i<arr1.length;i++){
         arr1[i]*=3;
     }
     return arr1;
 }
 console.log("Expected triple resutl with fun expression: " + triples1(arr));
 // Using Arrow function 
 let triple=(arr1) => {
     for(let i=0;i<arr1.length;i++){
         arr1[i]*=3;
        }
    return arr1;
 }
 console.log("Expected reslut with anonymous fuc : " +triples1(arr));