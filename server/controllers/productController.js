const { Product } = require('../models/index');
const mongoose = require('mongoose');

module.exports = {
    async addProduct(req, res) {
        const { name, price, imageURL, detail, barcodeID } = req.body;

        const product = new Product({
            name, price, imageURL, _id: new mongoose.Types.ObjectId(barcodeID), detail
        });

        const savedProduct = await product.save();

        res.send(savedProduct);
    },

    async getProduct(req, res) {
        const barcodeID = req.params.id;

        const product = await Product.findOne({ barcodeID });

        res.json(product);
    }
}