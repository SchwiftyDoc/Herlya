let http = require('http')
let server = http.createServer()
let url = require('url')

// Test 6 pour le GithubHook avec un console log
console.log('GitHub Hook!')

server.on('request', (request, response) => {
  response.writeHead(200, {
    'Content-type' : 'text/html; charset=utf-8'
  })
  response.end('Salut comment ça va lol?')
})

server.listen(80)
