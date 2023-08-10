// ----- Libarary Imports -----

// Library to setup an HTTP server application
const express = require('express');
const cors = require('cors');

// ----- File Imports -----

// Function to connect to DB
const dbConnect = require('./config/dbConfig');
// Import routers for the requests
const { authRouter, cartRouter, productRouter } = require('./routers/index');

// Get the env variables exported from the env config file
const { PORT } = require('./config/envConfig');

// Create an instance of the express server application
const app = express();

app.use(cors());
app.use(express.json());

// Connect to the DB
const connection = dbConnect();

// Starting the server only once it is connected to DB
connection
.on('error', () => console.error('Could not start server: Error while connecting to DB'))
.once('open', () => {
    // Auth router
    app.use('/api/auth', authRouter);

    // Cart Router
    app.use('/api/cart', cartRouter);

    // Product Router
    app.use('/api/product', productRouter);

    // Home route
    app.get('/', (req, res) => {
        res.json({ 'message': `Hello from server running on port ${PORT}!` });
    });

    // Listen to incoming requests
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});