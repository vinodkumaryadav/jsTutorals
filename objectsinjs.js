// this will be showing us how ibjects are worked in JS 

let person = {
    first_name: "vk",
    last_name: "yads"
}

console.log(person.last_name);
person.age = '24'

console.log(person.age)

// if we are using this code and we are not seeing the full object then use forcefully print example
console.log(person)

//console.dir(person, { depth: null });  // this code is used to forcefully print full object 

// we can define a function inside a object just 

let obj_with_func = {
    first_names: "vky",
    last_names: "yads",
    fullname: function(){
        return this.first_names + " "+ this.last_names
    }
}

console.log(obj_with_func.fullname())
/*
let obj_with_func = {
    first_names: "vk",
    last_names: "yads",
    fullname: () => `${obj_with_func.first_names}$ {obj_with_func.last_names}`
};

console.log(obj_with_func.fullname()) 
*/

/*
Key Concepts
return is Required

JavaScript functions must have a return statement to output a value.

Without it, they return undefined.

this Binding in Functions

Regular functions (function() {}) use this to refer to the calling object (obj_with_func in this case).

Arrow functions (() => {}) do not bind this, so they inherit it from the outer scope (which can cause issues in methods).

String Concatenation

this.first_names + this.last_names → "vkyads" (no space).

Adding a space (" ") makes it "vk yads".

*/