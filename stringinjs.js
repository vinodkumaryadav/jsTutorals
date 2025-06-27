const { doesNotMatch } = require("assert");

let comname = 'Zymr Systems Pvt '

// funtions applied on sting in JS

let length_of_string = comname.length
console.log(length_of_string); // this give us 16 , as space is alos count as string charecter 

let substring = comname.slice(0,5)

console.log(substring); // it will give first four charecter 

let trimigspace = comname.trim().length // this will trim the space from start and end if any

console.log(trimigspace)

// I some case we need to parse sting into intiger , where some numeric value we got as sting 
// Example 
 
let date1 = "21"
let date2 = '22'

// now we need difference between these two dates 
console.log(date1)
console.log("----------------------")
console.log(date2)
console.log("----------------------")
//let datediff = date2 - date1   // we can do this , but in some case we need to parsh this into intiger
let datediff = parseInt(date2) - parseInt(date1)
console.log(datediff)

// we can convert the number into String useing tostring

// Concanate the sting 


let concatestring = substring+" this is a software comapany"

console.log("_____---- concatanation of sting ", concatestring);

let searchstrsub = concatestring.indexOf("is")
let count_is = 0
while (searchstrsub !== -1) {
    count_is++
    searchstrsub = concatestring.indexOf("is", searchstrsub+1)

}
console.log("this is count of is = ", count_is)

// the above code, we are trying to get the number of occurace of the particular ssubstring in a given string , we are getting the count of is 
// below same we can get the count of single charecter string as well, like below we can get the count of a in string

searchstrsub = concatestring.indexOf("a")
let count_a = 0
while (searchstrsub !== -1) {
    count_a++
    searchstrsub = concatestring.indexOf("a", searchstrsub+1)

}
console.log("this is count of a = ", count_a)

// the above code, we are trying to get the number of occurace of the particular ssubstring in a given string 
