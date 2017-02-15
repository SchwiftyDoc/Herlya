//let express = require('express')
console.log('Salut')
/*let app = express()
let server = require('http').createServer(app)
let expressWs = require('express-ws')(app)
let path = require('path')
let ent = require('ent')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let io = require('socket.io').listen(server);

let index = require('./routes/index')
let users = require('./routes/users')
let messages = require('./routes/messages')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/users', users)
app.use('/messages', messages)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

io.on('connection', function(socket) {
  socket.on('new user', function(pseudo) {
      pseudo = ent.encode(pseudo);
      socket.pseudo = pseudo;
      socket.broadcast.emit('new user', pseudo);
  });
  socket.on('disconnect', () => {
    socket.broadcast.emit('disconnection', {message : socket.pseudo + ' has disconnected.'})
  })
})

server.listen(8080)

module.exports = app*/
