const Excell = require('exceljs')

async function OperationOnExcel()
{    
    let outPut = {rowNum:-1, cellNo:-1}

const workbook = new Excell.Workbook()
await workbook.xlsx.readFile('./excelRecords/fruits.xlsx')
const sheet1 =  workbook.getWorksheet('Sheet1')
sheet1.eachRow(  (row, rowNumber) => {
 row.eachCell((cell,cellnumber) => {
    if(cell.value === 'Sample'){
        outPut.rowNum = rowNumber;
        outPut.cellNo = cellnumber;
        
    }
 }) 
})
console.log(outPut.rowNum,outPut.cellNo)
const cell = sheet1.getCell(outPut.rowNum,outPut.cellNo)
cell.value = 'Banana'
await workbook.xlsx.writeFile('./excelRecords/fruits.xlsx')
}




OperationOnExcel();