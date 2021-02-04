// Test code driver for practice JavaScript (using PowerShell >> node <filename>.js)
// for PSU CS300  Winter 21
// Instructor Fei Xie


// get path, LinkedList available module export (ListNode is private)
var myArgs = process.argv.slice();
const path = myArgs[2];
const LinkedList = require(path);
//available files include: 
let n = './list.js'
let r = './arr.js'
let s = './stack.js'
let t = './bst.js'

let list;

// main test routine code, create list and manipulate
if(path == r) {
    num = 100;
    list = new LinkedList(null, num);
} else  {
    list = new LinkedList();
} 

console.log("Building list with " + path + ":");
console.log();

if(path == s) {
    if(list.empty()) {
        console.log("List is empty, begin to push stack.");
        console.log();
    }
    for (i = 0; i < 10; i++) {
        list.push(Math.floor(Math.random() * 100));
    }
} else {
    for (i = 0; i < 10; i++) {
        list.insert(Math.floor(Math.random() * 100));
    }
}

// display initial ability to insert, count items
console.log("The list has " + list.length() + " nodes: ");
if(path == t) {
    console.log("The height of the tree is " + list.height() + " levels");
}
console.log();
list.display(); 

if(path == t) {
    console.log();
    console.log("Tree list aditional check, level display: ");;
    list.level_display();
}


// if (path == r) {
//     // display initial ability to recursively traverse at node,
//     // if needed, count items
//     // 
//     console.log("Checking Recursive Display");
//     console.log();
//     list.display_R();
// }

// if (path == s) {
//     console.log("Peeking at head: ");
//     let num = list.peek();
//     console.log("Num peeked: " + num);
//     console.log();
//     console.log("Popping at head: ");
//     let node = list.pop();
//     console.log("Num from popped: " + node.data);
//     console.log();
//     console.log("Peeking at head: ");
//     num2 = list.peek();
//     console.log("Num peeked: " + num2);
//     console.log();
//     console.log("Pushing val: " + num);
//     list.push(num);
//     console.log();
// }

// //get items at index
// console.log("Items stored at index 1, 5, 9:");
// console.log("Node 1: " + list.get_value_at(1));
// console.log("Node 5: " + list.get_value_at(5));
// console.log("Node 9: " + list.get_value_at(9));
// console.log();

// // remove items at index
// console.log("Remove items 5, 9 (in that order)");
// list.remove_by_index(5);
// list.remove_by_index(9);
// console.log();

// // get items at index, check removals
// // 5 should contain a new value, 9 should be empty
// console.log("Items stored at index 1, 5, 9:");
// console.log("Node 1: " + list.get_value_at(1));
// console.log("Node 5: " + list.get_value_at(5));
// console.log("Node 9: " + list.get_value_at(9));
// console.log();

// if (path == r) {
//     // display ability to recursively traverse at node
//     // if needed, count items
//     console.log("Checking ability to traverse by recursion (node, not index) after removal");
//     console.log("the list has " + list.length() + " nodes:");
//     console.log();
//     list.display_R();
// }

// // inserting values 1, 222, 555
// console.log("Inserting values {1, 222, 555} for value reference testing")
// if(path != s) {
//     list.insert(1);
//     list.insert(222);
//     list.insert(555);
// } else {
//     list.push(1);
//     list.push(222);
//     list.push(555);
// }
// console.log();

// // get items at value
// console.log("Index of items with values 1, 222, 555:");
// console.log("Node " + list.find_index_of(1) + ": 1")
// console.log("Node " + list.find_index_of(222) + ": 222");
// console.log("Node " + list.find_index_of(555) + ": 555");
// console.log();


// // remove items at value
// console.log("Remove items with values 1, 555 (in that order)");
// list.remove_by_value(1);
// list.remove_by_value(555);
// console.log();

// if (path == r) {
//     // display ability to recursively traverse at node
//     // if needed, count items
//     console.log("Checking ability to traverse by recursion (node, not index) after removal");
//     console.log("the list has " + list.length() + " nodes:");
//     console.log();
//     list.display_R();
//     console.log();
// } else {
//     // display 
//     console.log();
//     list.display();
// }

// // get items at value, check removals
// console.log("Index of items with values 1, 222, 555:");
// console.log("Node " + list.find_index_of(1) + ": 1")
// console.log("Node " + list.find_index_of(222) + ": 222");
// console.log("Node " + list.find_index_of(555) + ": 555");
// console.log();


// // reverse in place
// console.log("Reversing list (in place)");
// list.reverse_in_place();
// console.log();

// if (path == r) {
//     // display ability to recursively traverse at node
//     // if needed, count items
//     console.log("Checking ability to traverse by recursion (node, not index) after removal");
//     console.log("the list has " + list.length() + " nodes:");
//     console.log();
//     list.display_R();
// } else {
//     // list displayed in reverse
//     console.log("List displayed, now reversed");
//     console.log();
//     list.display();
// }

// // // sort list again, in place
// // console.log("Sorting the list (in place)");
// // list.sort_to_ascending();
// // console.log();

// // //display list at final state
// // list.display();

