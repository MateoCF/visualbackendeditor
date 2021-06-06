const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    "username": String,
    "password": String,
    "businessName": String,
    "data": {
        "website": mongoose.Schema.Types.ObjectId,
        "models": {},
        "users": {}
    }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = { Customer }