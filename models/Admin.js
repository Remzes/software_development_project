const mongoose = require('mongoose');
const {Schema} = mongoose;

//Schema of the Admin
const adminSchema = new Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model('admins', adminSchema);