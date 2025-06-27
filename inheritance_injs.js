// Inheritance is the way where one class obtain the properties of parent class 
const Classes_js = require('./classes_injs')

class pet extends Classes_js
{
    constructor(firstname,lastname){
        super(firstname,lastname)
    }
}
let petname = new pet("roki","raja")
console.log(petname.fullname())