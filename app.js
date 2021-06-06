// Module Declarations
const express = require("express");

// External Files
const generator = require("./routes/generator");

// Module Initializations
const app = express();

// Configurable Settings
const port = 3000;

// App Initializations
app.set("view engine", "ejs");
app.use("/generator", generator);

// Start server
app.listen(port, () => {
  console.log("Listening on port " + port);
});
