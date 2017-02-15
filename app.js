let http = require('http')
let server = http.createServer()

server.on('request', (request, response) => {
    console.log('Nouvelle requête')
})

server.listen(80)
