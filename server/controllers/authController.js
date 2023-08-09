const { User, Cart } = require('../models/index');

module.exports = {
    async register(req, res) {
        const { name, phoneNumber, password } = req.body;

        // Password not being hashed as it is only a prototype

        try {
            const defaultCart = new Cart({
                phoneNumber, 
                items: []
            });
    
            const cart = await defaultCart.save();
    
            const userObject = new User({
                name, 
                phoneNumber, 
                password, 
                cart: cart._id
            });
    
            const user = await userObject.save();
            res.send(user);
        }
        catch(err) {
            console.log(err);
        }
    }
};