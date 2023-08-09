// Library for MongoDB interaction
const mongoose = require('mongoose');

// Get connection string for DB from env variables
const { DB_CONN_STRING } = require('./envConfig');

function dbConnect() {
    // Connect to MongoDB
    mongoose.connect(DB_CONN_STRING);
    const connection = mongoose.connection;

    // Return the connection object
    return connection;
}

// Export the dbConnect function
module.exports = dbConnect;
