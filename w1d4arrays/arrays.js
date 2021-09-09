"use strict"
module.exports = {maxOfThree, sum,multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams}
function maxOfThree(num1, num2, num3){
    let max=num1;
    if(max < num2){
        max = num2;
    }  
    if(max < num3){
        max = num3;
    }

    return max;
}

function sum(arr){
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

function multiply(arr){
    let multy = 1;
    for(let i = 0; i< arr.length; i++){
        multy = multy * arr[i];
    }
    return multy;
}

function findLongestWord(arr){
    
    let maxlength = arr[0].length;
    for(let i = 1; i< arr.length; i++ ){
        if(maxlength < arr[i].length){
            maxlength = arr[i].length;
        }
    }
    return maxlength;
}

function reverseArray(arr){
    let arrs = [];
    for(let i = 0; i< arr.length;i++){
        arrs[arr.length -(i+1)] = arr[i];
    }
    return arrs;
}
function reverseArrayInPlace(arr){
    let arrs = [];
    for(let i = 0; i< arr.length;i++){
        arrs[arr.length -(i+1)] = arr[i];
    }
    return arrs;
}

function scoreExams(arr1, arr2){
    let arr3 = [];
    for(let i = 0; i< arr1.length; i++){
        let y = 0;
        for(let j = 0; j< arr2.length;j++){

            if(arr1[i][j] == arr2[j])  {
                y = y + 1;
            }

         
        }
        arr3.push(y);
    }

    return arr3;
}

 console.log(maxOfThree(1,2,3));
 console.log(scoreExams([[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]], [3, 1, 2,4]));