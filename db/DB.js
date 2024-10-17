const mongoose = require('mongoose');
const dbUrl = require('../config/keys');
const { mongodb } = require('../config/local.constant');
require('dotenv').config();

mongoose.connect(dbUrl.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connected');
    console.log(mongodb);
}).catch((err) => {
    console.error('Cannot connect to the database:', err);
    process.exit(1); 
});



// // MongoDB connection event listeners
// mongoose.connection.on('connected', () => {
//     console.log('MongoDB Connected');
// });

// mongoose.connection.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
// });

// mongoose.connection.on('disconnected', () => {
//     console.log('MongoDB disconnected');
// });

module.exports = mongoose;
