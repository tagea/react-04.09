const app = require('express')();//приложение express
const bodyParser = require('body-parser');//для обработки данных
const mongoose = require('mongoose');//для работы с mongoDB
const server = require('http').Server(app);
const io = require('socket.io')(server);//для работы с сокетами

//подключаем приложение к bodyparser
app.use(bodyParser.json());
//подключаемся к базе mongo
mongoose.connect('mongodb+srv://user-super:VSUcD3WtCuKOO51d@cluster0-izll9.mongodb.net/messenger');
//подлкючаем модели
const { User } = require('./models');

server.listen(3000, () => {//порт для работы сервера
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

app.get('/users', async(req, res) => {
  //вывод, используя модель mongoose
  const users = await User.find();
  res.json(users);
});

app.get('/users/:id', async(req, res) => {
  const user = await User.findById(req.params.id);//поиск по ID
  res.json(user);
});
//отправляем пользователя в БД
app.post('/users', async(req, res) => {
  let user = new User(req.body);//в req.body содержится запрос в json
  user = await user.save();//сохраняем в базу данные

  res.json(user);
});

// io.on('disconnection', (socket) => {
//   // Удалить id из базы
// });