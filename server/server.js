var app = require('express')(); 
var http = require('http').createServer(app); 
var io = require('socket.io')(http); 

app.get('/', (req, res) => {
  // Load index.html template
  res.sendFile(__dirname + '/index.html'); 
}); 

// set up chat connection
io.on('connection', (socket) => {
  console.log('User connected'); 
  const name = "User"; 
  io.emit('chat message', `${name} connected`); 

  // socket.on('connect', () => {
  //   // const name = prompt('What is your name?'); 
  //   const name = "User"; 
  //   io.emit('chat message', `${name} connected`); 
  // })

  // do this one chat message
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg); 
    io.emit('chat message', msg); 
  }); 

  // when a user disconnects
  socket.on('disconnect', () => {
    // io.broadcast('User disconnected')
    io.emit('chat message', 'User disconnected')
    console.log('disconnected'); 
  })
})

const port = 3001; 
http.listen(port, () => {
  console.log(`listening on port ${port}`); 
})