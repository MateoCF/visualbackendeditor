const mongoose = require("mongoose");

const customModelSchema = new mongoose.Schema({
    "modelName": String,
    "userPrimary": [ mongoose.Schema.Types.ObjectId ],
    "modelPrimary": [ mongoose.Schema.Types.ObjectId ],
    "userForeign": [ mongoose.Schema.Types.ObjectId ],
    "modelForeign": [ mongoose.Schema.Types.ObjectId ],
    "customAttributes": {}
});

const CustomModel = mongoose.model('CustomModel', customModelSchema);

module.exports = { CustomModel };