const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({});

const User = mongoose.model('User', userSchema);

module.exports = User;
