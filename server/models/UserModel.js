// Import Schema and model from mongoose
const { Schema, model } = require('mongoose');

// User schema
const userSchema = new Schema({
    name: String,
    phoneNumber: String,
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
    }
});

// Export the User model
module.exports = model('User', userSchema);