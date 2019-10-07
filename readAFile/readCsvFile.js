const fs = require('fs')
const path = require('path')

let csvData
fs.readFile(path.join(__dirname,'customer-data.csv'),{encoding: 'utf8'},
  (data, error) => {
    if (error) return console.error(error)
    csvData = data
  }
)

console.log(csvData)
