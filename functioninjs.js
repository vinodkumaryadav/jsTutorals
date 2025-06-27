
let a;
let b;
function add(a,b){
    sum = a+b;
    return sum;
}

console.log(add(5,7))

// Above is the simple function to add two number 

// in JS we can declarare a function without name , those functions are called anonymous function 
// these function are declared with variable 
// Example

let addition = function(a,b){
   sume = a+b
   return sume
} 
console.log(addition(19,9))
// below same addition we can do with arrow function , which is a anonymous function , we are declaring with variable
let sum2 = (a,b)=> a+b
console.log(" ***** ",sum2(17,9))
