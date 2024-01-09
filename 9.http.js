const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.end('Hola Mundo')
})

server.listen(3000, () => {
    console.log('Server listening on port 3000')
})