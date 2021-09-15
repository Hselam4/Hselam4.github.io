"use strict";

//  const { hasSubscribers } = require("diagnostics_channel");

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
   module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num any number
 * @returns {number} the sum of all the numbers from 1 - num.
 */
function sumTo(num){
    if(num===1){
        return 1;
    }else{
        return num + sumTo(num-1);
    }
}

/**
 * 
 * @param {number} num  any number greater than one.
 * @returns {number} the product of all the numbers from 1-num
 */
function factorial(num){
    if(num===1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

/**
 * 
 * @param {number} num any number
 * @returns{number} sum of the fibonacci numbers.
 */

function fibonacci(num){
if(num<=1){
    return num;
}else {
    return fibonacci(num-1) + fibonacci(num-2);
}
}


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


/**
 * 
 * @param {Object} listObj a list of objects.
 *  @returns{undefined} doesnt return anything.
 */
  function outputList(listObj){
    if(listObj.next===null){
        console.log(listObj.value);
    }else{
        console.log(listObj.value);
        outputList(listObj.next);      
    }

  }


/**
 * 
 * @param {Object} listObj a list of objects.
 *  @returns{undefined} doesnt return anything.
 */
  function outputListLoop(listObj){
    while(listObj!==null){
        console.log(listObj.value);
        listObj = listObj.next;
    }

  }

/**
 * 
 * @param {object} listObj a list of objects.
 * @returns{undefined} doesnt return anything.
 */
  function reverseList(listObj){
      if(listObj.next===null){
          console.log(listObj.value);
      }else{
          reverseList(listObj.next);
          console.log(listObj.value);
      }
  }


  function reverseListLoop(listObj){
  let node = listObj;
  let previous = null;

  while(node) {  
    let temp = node.next;
    node.next = previous;
    previous = node;
   
    node = temp;
  }
  return previous;
}

// let node3 = {
 
// name: "p",
// value: "This is text in the a paragraph", 
// children: null
// };

// let node4 = { 
//     name: "label", 
//     value: "Name", 
//     children: null
// };

// let node5 = {
// name: "input",
// value: "this was typed by a user", 
// children: null
// };

// let node2 = {
// name: "div",
// value: null,
// children: [node4, node5]
// };

// let node1 = {
// name: "body",
// children: [node2, node3], 
// value: null,
// };

/**
 * 
 * @param {object} node node objects.
 */
function showValueNameRecursion(node){
    if(node.children==null){
        console.log(`${node.name} : ${node.value} `);
    }
    else{
        for(let subNode of node.children){
           showValueName(subNode);
        }
        console.log(`${node.name} : ${node.value} `);
    }
    };


    function showValueNameLooping(node){
        if(node.children!==null){
        for(let subNode of node.children){
               console.log(`${subNode.name} : ${subNode.value}`); 
            }
        }else if(node.children==null){
            console.log(`${node.name}: ${node.value}`);
        }        
 
    }



  console.log(showValueNameLooping(node1)); 

  console.log(reverseListLoop(list));
         
