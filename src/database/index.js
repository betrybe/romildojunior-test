const mongoose = require('mongoose');

const MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster';

mongoose.connect(MONGO_DB_URL);

module.exports = mongoose;