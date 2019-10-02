const fs = require('fs')
fs.writeFile('message.txt', 'Hello WOrld!', function(error) {
    if(error) return console.error(error)
    console.log('Writing is done...')
})