let http = require('http')
let server = http.createServer()
let url = require('url')

server.on('request', (request, response) => {
    response.writeHead(200, {
        'Content-type' : 'text/html; charset=utf-8'
    })
    response.end('Salut comment ça va lol?')
})

server.listen(80)
