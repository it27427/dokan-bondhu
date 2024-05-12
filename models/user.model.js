const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4 as uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    trim: true
  },
  salt: String,
  role: {
    type: Number,
    default: 0
  },
  history: {
    type: Array,
    default: []
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
