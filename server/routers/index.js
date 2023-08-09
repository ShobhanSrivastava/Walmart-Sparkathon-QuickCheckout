// Import the routers from the current directory
const authRouter = require('./authRouter');
const cartRouter = require('./cartRouter');
const productRouter = require('./productRouter');

module.exports = { authRouter, cartRouter, productRouter };