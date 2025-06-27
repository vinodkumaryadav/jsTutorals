let myarray = [10,20,30,11]
console.log(myarray.length)
// slice method is used to create a sub array from the given array , we can pass index number from and to , not if we ant to print elemnt till index of 3 then we need to pass index 4 in to)

subarray = myarray.slice(1,3)
console.log(subarray)
// adding/appending new value in array 

myarray.push(50)
//console.log(myarray)
console.log("***** ****** ***** ***** ****** *****")
//removing item from array 
myarray.pop()

//console.log(myarray)
console.log("***** ****** ***** ***** ****** *****")
// the above code is adding at the end of the array and removing from end 
// what if we need to remove first element or any selected element

myarray.unshift(70)

//console.log(myarray.indexOf(11))

//console.log(myarray.includes(71))

var sum = 0;
// printing the each element of the array 
for (let i = 0;i<myarray.length;i++)
{
  
   // console.log(myarray[i]);
    sum = sum + myarray[i]
    
}
//console.log("---",sum);

let val = myarray.reduce((sum,arrayvalue)=>(sum+arrayvalue),0)
console.log("******** this ***** sum *****is for ***** val")
//console.log(val)

// we will use filter method to get the new array from the given array with only event number 

let generalnumber = [10,12,13,15,16,18,21,24,26,32,33]

// we will generate a new array with the loop then we will achive same with filter function

let evennumbes = [];
for (let k = 0;k<generalnumber.length;k++)
{
    //console.log("-umbers-",generalnumber[k])

    if(generalnumber[k]%2 == 0)
    {
        evennumbes.push(generalnumber[k])
    }
    
}
//console.log("-evennumbes = ",evennumbes);

// same above thing we can get with filter method

let filetmetho = generalnumber.filter(generalnumber=>generalnumber%2==0)
//console.log("####Filter##### ",filetmetho)

// lets use the map method , the map method is used to modify the array value 

let mappedarray = filetmetho.map(mapped => mapped/2)
console.log("### MappedArray ##### ====  ",mappedarray)

// now be low  we can chain the above with reduce method , below code first create a array for then modify the values by deviding each with 2 , then add all values with reduce method

let redu = generalnumber.filter(generalnumber=>generalnumber%2==0).map(vslu => vslu/2).reduce((su,va)=>(su+va),0)

console.log("### redu ##### ====  ",redu)
