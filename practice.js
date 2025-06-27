let expense = [10,66,98,88,55]
let valu= 0
totalexpence = expense.reduce((valu,se)=>(valu + se))

let newarr = expense.sort()
console.log(newarr[0])

let studentNames = ['stu1','atu2','btu3']


studentNames.unshift("ctu4")

studentNames.pop()


console.log(studentNames)

studentNames.sort()
console.log("-------------- ------------- --------------")
console.log(studentNames)

let productPrice = [53,60,54,88,55]
let discountedPrice = productPrice.map(mapped => mapped - mapped*10/100)
console.log(discountedPrice)
let affordableProducts = []
let vari = 0
for(i=0;i<productPrice.length;i++){
    if(discountedPrice[i]< 50)
    {
        affordableProducts.push(discountedPrice[i])
    }
}
console.log(affordableProducts.reduce((vari,ad)=> vari+ ad))

