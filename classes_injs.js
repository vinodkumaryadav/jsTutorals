// define a class with class keyword in JS

module.exports = class person{
    // define the properties of the class , variable , methods in this class 

    firstname = "vk"

    lastname = "yad"

    age = 10
   // we can define getter method in the class which is treted as property of class

   get area(){
    return "ADI"
   }

// constructor in js , executes bydefault when we create an object of class 

constructor(firstname,lastname){
     this.firstname = firstname
     this.lastname = lastname
   

}
fullname(){
    return (this.firstname+" "+this.lastname)
}
}

// to access properties of this we need to create object of the class 

/*
let classobj = new person("vkz","vkle")

console.log(classobj.firstname)
console.log("*** This ** is ** class object with gettermethod*** ",classobj.area)

console.log(classobj.fullname())

let classobj2 = new person("dar","shah")

console.log(classobj2.fullname())
*/