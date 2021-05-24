// Modules
const express = require("express");

// Files
// const

// Function / Object Declarations
const app = express();
// const router = express.Router();

// Configurable Settings
const port = 3000;


app.get("/", function(req, res, next) {
  res.send("beat");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
