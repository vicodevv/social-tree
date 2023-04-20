const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'Username already exist'],
    },
    email: {
        type: String,
        required: true,
        unique:[true, 'Email already exist'],
    },
    password: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('User', UserSchema)