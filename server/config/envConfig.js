// Library to configure env variables to the application
const dotenv = require('dotenv');

// Link the env variable to the application
dotenv.config();

// Get the env variables linked to the process object
const {
    PORT, DB_CONN_STRING
} = process.env;

// Export the env variable to the application
module.exports = { PORT, DB_CONN_STRING };