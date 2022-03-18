/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters

function addTwoNumbers(a, b){
    //code block
    return a+b;
}
let sum = addTwoNumbers(3,5)
console.log(sum);


// ES6
const addTwoNumbers2 = (c,d) => {
    return c + d;
}
let sum2 = addTwoNumbers2(3,5)
console.log(sum2);

// Single Line Arrow Function With Parameters
const addTwoNumbers3 =(e, f) => e + f;
let sum3 = addTwoNumbers3(4, 5);
console.log(sum3)
// also valid --> const addTwoNumbers3 =(e, f) =>( e + f);

// Implicit Returns

// Returning Multiple Lines
