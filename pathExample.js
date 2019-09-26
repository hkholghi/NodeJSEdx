const path = require('path')
//console.log(path)
let relativeAddressing = path.join('Users', 'Refsnes', 'demo_path.js')
//const server = require(path.join('app','server.js'))

console.log(relativeAddressing)

let absoulteAddressing = path.join(__dirname,'app','server.js')
console.log(absoulteAddressing)