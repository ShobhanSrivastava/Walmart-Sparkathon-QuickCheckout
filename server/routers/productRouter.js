// Import the router function from express
const { Router } = require('express');
// Import the product Controller from the controllers directory
const { productController } = require('../controllers/index');

// Create router
const router = Router();

// Route to get a product using the product id
router.get('/:id', productController.getProduct);

// Route to add product 
router.post('/add-product', productController.addProduct);

// Export the router
module.exports = router;