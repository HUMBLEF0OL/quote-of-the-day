const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true,
        auto: true,
        index: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;