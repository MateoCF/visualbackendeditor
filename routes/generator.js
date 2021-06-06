const express = require("express");
const router = express.Router();
const features = require("./../config/features.js");

router.get('/', function(req, res, next) {

    res.render('generator/main',  { features });
});

module.exports = router;