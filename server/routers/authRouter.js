// Import the Router function from express
const { Router } = require('express');

// Import authController that will process the request
const { authController } = require('../controllers/index');

// Create a router
const router = Router();

// POST register route
router.post('/register', authController.register);

// Export the router
module.exports = router;