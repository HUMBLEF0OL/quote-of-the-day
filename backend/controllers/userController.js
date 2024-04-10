const User = require('../models/User')

const registerUser = async (req, res) => {
    const { email } = req.body;
    try {
        const result = await User.create({ email: email });
        res.json(result);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}


module.exports = registerUser;