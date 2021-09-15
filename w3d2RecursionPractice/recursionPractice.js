module.exports = {getMatchingTree}
function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}
   // create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function contains(tree,name){
    if(tree.value===name)
        return true;
    if(tree.descendents && tree.descendents.length>0){
        for(let item of tree.descendents){
           if(contains(item,name))
               return true;
        }
    }
   return false;
}

console.log( contains(abe,"Lisa"));
function getMatchingTree(tree,name){
    if(tree.value===name){
        return tree;
    }
    if(tree.descendents && tree.descendents.length>0){
        for(let item of tree.descendents){
           let matchingNode = getMatchingTree(item,name);
           if(matchingNode){
                return matchingNode; 
           }
        }
    }
    return null;
}
console.log("getMatchingTree ",getMatchingTree(abe,"Lisa"));

function ListNode(value,next){
    this.value = value;
}



function findMaxArguments() {
    let max = -Infinity;
    console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function restTest(x, y, ...more) {
    let total = x + y;
    console.log(total, x, y, more.length);
    if (more.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
    }
    console.log("Total: " + total);
    return total;
}

function spreadTest() {
    let a = [1, 2, 3];
    // let b = a;
    a.push([5, 6]);

    a = a.concat([5, 6])
    console.log(a);

    let b = [...a];//copy of array- clone
    b.splice(0, 1);
    a.splice(0, 0, "add");
    console.log(a, b);
    console.log(a == b);

    let str = "Hello";
    console.log(" spread ", [...str]);

    let spread1 = [1, 2, 3];
    let string = "dog";
    let numberN = 2;
    let booleanB = true;
    let spread2 = [4, 5];
    console.log([...spread1, ...spread2, string, numberN]);
    console.log(spread1.concat(spread2, string, numberN));

    abb = { a: 1, b: 2, c: 3, d: 44 }
    baa = { ...abb }//copy of object - clone
    console.log(baa) // {a:1, b:2, c:3, d: 44}
    baa.a = 100;
    console.log(abb) // {a:1, b:2, c:3, d: 44} 
}

    // console.log("  max element ",findMaxArguments(1, 123, 500, 115, 66, 88));
    console.log("  max element ", findMaxArguments([1,"string",true,4,5],[1,2]));



function linkedList() {
    let list = { value: 1 };
    list.next = { value: 2 };
    list.next.next = { value: 3 };
    list.next.next.next = { value: 4 };
    list.next.next.next.next = { value: 5 };

    //Split list 1,2 and newList 3,4
    let newList = list.next.next;
    list.next.next = null;
    console.log(list, newList);
    //Join newList again to list.
    list.next.next = newList;

    console.log(list);
    console.log(JSON.stringify(list));
    //Prepend New item to the list
    list = { value: "new item", next: list }
    console.log(list);
}

function linkedListAss() {
    let c = { value: "C" }
    let b = { value: "B", next: c }
    let a = { value: "A", next: b };
    console.log(a);
    //delete link to B
    a.next = a.next.next;
    console.log(a);
    //delete b.next;
    b.next = null;
    //Add B at the end after C
    a.next.next = b;
    //Add Z between c and b
    c.next = { value: "Z" };
    c.next.next = b;
    console.log(JSON.stringify(a));
}
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
}


//Q1
function printNames(node1) {
    console.log(node1.name + ":" + node1.value);
    if (node1.children && node1.children.length > 0) {
        //console.log("Inside IF ", node1.name);
        node1.children.forEach(function (child) {
            //console.log(`Inside forEach parent ${node1.name}  child ${child.name}`)
            printNames(child);
        })
    }
}

function printNamesWithLoop(node1) {
    console.log(node1.name + ":" + node1.value);
    if (node1.children && node1.children.length > 0) {
        // console.log("Inside IF ", node1.name);
        node1.children.forEach(function (child) {
            //console.log(`Inside forEach parent ${node1.name}  child ${child.name}`)
            console.log(child.name + ":" + child.value);
            if (child.children && child.children.length > 0) {
                child.children.forEach(function (grandChild) {
                    console.log(grandChild.name + ":" + grandChild.value);
                });
            }
            //printNames(child);
        })
    }
}
//printNames(node1)
