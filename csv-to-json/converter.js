const csvFilePath = 'customer-data.csv'
const fs = require('fs')
const csv = require('csvtojson')
const jsonFilePath = 'customer-data.json'
let jsonArr = []
csv()
  .fromFile(csvFilePath)
  .then ((jsonObj)=> {
    try{
      jsonArr.push(jsonObj)
      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj))
      //console.log(jsonArr)
     }catch(err){
        console.error(err)
      }
    
  });
  console.log(jsonArr)
  
  