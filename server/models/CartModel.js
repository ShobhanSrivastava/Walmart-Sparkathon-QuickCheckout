// Import the Schema and Model from mongoose package
const { Schema, model } = require('mongoose');

// Cart schema
const cartSchema = new Schema({
    phoneNumber: String,
    total: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    items: [{ 
        product: { type: Schema.Types.ObjectId, ref: 'Product', field: 'barcodeID' }, 
        quantity: Number
    }]
});

// Export the cart model
module.exports = model('Cart', cartSchema);