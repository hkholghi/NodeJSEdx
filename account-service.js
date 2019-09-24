const sum = require('./utility.js')

let checkingAccountBalance = 200
let savingAccountBalance = 100
let retirementAccountBalance = 2000

let totalBalance = sum([checkingAccountBalance, savingAccountBalance, retirementAccountBalance])
console.log(totalBalance)