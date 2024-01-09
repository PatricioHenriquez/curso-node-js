const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.end('Hola Mundo')
})


findAvailablePort(1234).then(port => {
    server.listen(port, () =>{
        console.log(`Server listening on port http://localhost:${port}`)
    })
})

