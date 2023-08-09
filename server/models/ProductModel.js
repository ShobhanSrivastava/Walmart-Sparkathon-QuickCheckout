// Import the Schema and model from mongoose
const { Schema, model } = require('mongoose');

// Product schema
const productSchema = new Schema({
    name: String,
    detail: String,
    price: Number,
    imageURL: String,
    barcodeID: String
});

// Export the Product model
module.exports = model('Product', productSchema);