// Import the Router function from express
const { Router } = require('express');

// Import cart controller from controllers
const { cartController } = require('../controllers/index');

// Create the router using the Router function
const router = Router();

// Route to add item to cart 
router.post('/add-to-cart', cartController.addToCart);

// Route to remove item from cart
router.post('/remove-from-cart', cartController.removeFromCart);

// Route to clear the cart 
router.post('/clear-cart', cartController.clearCart);

// Route to get all the cart details
router.get('/get-cart-details', cartController.getCartDetails);

// Export the router
module.exports = router;