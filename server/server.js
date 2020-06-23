var app = require('express')(); 
var http = require('http').createServer(app); 
var io = require('socket.io')(http); 

app.get('/', (req, res) => {
  // res.send('<h1>Hello world!</h1>');
  res.sendFile(__dirname + '/index.html'); 
}); 

io.on('connection', (socket) => {
  console.log('User connected'); 
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg); 
    io.emit('chat message', msg); 
  }); 

  socket.on('disconnect', () => {
    console.log('disconnected'); 
  })
})

const port = 3001; 
http.listen(port, () => {
  console.log(`listening on port ${port}`); 
})