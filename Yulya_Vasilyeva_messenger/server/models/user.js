const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//описываем модель данных для бд
const userSchema = new Schema({
    name: { type: String, default: 'Ivan', require: true }
});

module.exports = mongoose.model('User', userSchema);