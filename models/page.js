const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  "title": String,
  "path": String,
  "accessibility": [ String ],
  "read": [],
  "create": [],
  "edit": [],
  "destroy": []
});

const Page = mongoose.model('Page', pageSchema);

module.exports = { Page };