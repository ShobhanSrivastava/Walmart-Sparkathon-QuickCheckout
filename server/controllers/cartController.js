const { Cart, Product } = require("../models");

module.exports = {
    // Add to cart
    async addToCart(req, res) {
        const { phoneNumber, barcodeID } = req.body;

        const product = await Product.findOne({ barcodeID });
        const cart = await Cart.findOneAndUpdate(
            { phoneNumber },
            { 
                $push: {
                    items: { product: product._id, quantity: 1 }
                },
                $inc: {
                    total: product.price,
                    quantity: 1
                }
            },
            { new: true, populate: { path: 'items.product' } }
        );

        res.send(cart);
    },

    // Remove From Cart
    async removeFromCart(req, res) {
        const { phoneNumber, barcodeID } = req.body;

        const product = await Product.findOne({ barcodeID });
        const cart = await Cart.findOneAndUpdate(
            { phoneNumber },
            { 
                $pull: {
                    items: { product: product._id, quantity: 1 }
                },
                $inc: {
                    total: -product.price,
                    quantity: -1
                }
            },
            { new: true, populate: { path: 'items.product' } }
        );

        res.send(cart);
    },

    // Clear cart
    async clearCart(req, res) {
        const { phoneNumber } = req.body;

        const cart = await Cart.findOneAndUpdate(
            { phoneNumber },
            {
              $set: {
                items: [], // Clear the items array
                total: 0, // Reset the total
                quantity: 0, // Reset the quantity
              },
            },
            { new: true } // Return the updated cart document
        );

        res.send(cart);
    },

    // Get cart details
    async getCartDetails(req, res) {
        const { phoneNumber } = req.body;

        const cartDetails = await Cart.findOne({ phoneNumber });

        res.send(cartDetails);
    }
}