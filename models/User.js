const mongoose = require('mongoose');
const {Schema} = mongoose;

//Schema of the User
const userSchema = new Schema({
    googleId: String,
    fullName: String,
    emailAddress: String,
    deleted: Boolean,
    banned: Boolean,
    credits: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('users', userSchema);
