const mongoose = require('mongoose');
const colors = require('colors');
const config = require('./config');

const dbURL = config.db.url;

const connectDB = () => {
  try {
    mongoose.connect(dbURL);
    console.log(`Database Connected Successfully!`.bgMagenta);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;