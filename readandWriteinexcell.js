const Excell = require('exceljs')

async function WriteOnExcel(filepath, searchProduct,replaceWith )
{    
   

const workbook = new Excell.Workbook()
await workbook.xlsx.readFile(filepath)
const sheet1 =  workbook.getWorksheet('Sheet1')
const outPut = await readXcel(sheet1,searchProduct)
console.log(outPut.rowNum,outPut.cellNo)
const cell = sheet1.getCell(outPut.rowNum,outPut.cellNo)
cell.value = replaceWith
await workbook.xlsx.writeFile(filepath)
}




async function readXcel(sheet1,searchProduct)
{
    let outPut = {rowNum:-1, cellNo:-1}
    sheet1.eachRow(  (row, rowNumber) => {
        row.eachCell((cell,cellnumber) => {
           if(cell.value === searchProduct){
               outPut.rowNum = rowNumber;
               outPut.cellNo = cellnumber;
               
           }
        }) 
       })
       return outPut;
}



 WriteOnExcel('./excelRecords/fruits.xlsx','Orange','Santara');
