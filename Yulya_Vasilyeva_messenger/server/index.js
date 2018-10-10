const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000, () => {
  console.log('Server has been started');
});

io.on('connection', (socket) => {
  // Записывать socket.id в базу
  socket.on('user', (user) => {
    socket.broadcast.emit('user', user);
    socket.emit('user', user);
    // отправка адресно - socket.in(<id нужного сокета>).emit(...)
  });
  socket.on('comments', (comments) => {
    socket.broadcast.emit('comments', comments);
    socket.emit('comments', comments);
  });
});

// io.on('disconnection', (socket) => {
//   // Удалить id из базы
// });