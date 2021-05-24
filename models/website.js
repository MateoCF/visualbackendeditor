const mongoose = require('mongoose');

function CRUD(userType, filter, styling) {
  if (userType) {

  }
}

var websiteSchema = new mongoose.Schema({
  "title": String,
  "path": String,
  "permittedLinks": Schema.Types.Mixed,
  "accessibility": [ String ],
  "read": [],
  "create": [],
  "edit": [],
  "destroy": []
});

var Website = mongoose.model('Website', websiteSchema);
