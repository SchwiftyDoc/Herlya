let app = require('express')()

app.get('/', (request, response) => {
  response.send('Salut')
})

server.listen(80)
