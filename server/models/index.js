// Import all the models from the current directory
const User = require('./UserModel');
const Cart = require('./CartModel');
const Product = require('./ProductModel');

// Export the models as named exports
module.exports = { User, Cart, Product };