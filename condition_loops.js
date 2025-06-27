/*let i=1;
let j=1;
while(j<=3)
{
  
    console.log("j is less than 3,, value of J is ", j)
    j++

}

do{
    console.log("j is less than 4,do-while lopp will execute once")
    j++
}while(j<4)

console.log("Value of J is now ", j)
*/
// for loop in javascript
/*
for (let k=0; k<=10; k++)
{
console.log(k)
}
*/
// finding the common multiple of 2 , 5 , 8 .. between 10 to 100 

let a ;

for(a=10;a<=100;a++)
{
    if(a%2==0 && a%5==0 && a%8==0)
    {
        console.log(a)
    }
    a++
}