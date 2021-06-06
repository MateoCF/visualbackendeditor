const mongoose = require("mongoose");

const customUserSchema = new mongoose.Schema({
   "userType": String,
   "username": String,
   "password": String,
   "customAttributes": {}
});

const CustomUser = mongoose.model('CustomUser', customUserSchema);

module.exports = { CustomUser }