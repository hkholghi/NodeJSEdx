const http = require('events')
const url = 'http://nodeprogram.com'
http.get(url, (response) => {
    let rowData = ''
    response.on('data', (chunk) => {
        rowData += chunk
    })
    response.on('end', () => {
        console.log(rawData)
    })
}).on('error', (error) => {
        console.error('Got error: ${error.message')
    })