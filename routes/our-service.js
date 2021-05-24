const express = require("express");

const path = require("path");

const routeDir = require("../util/path");

const router = express.Router();

router.get("/our-services", (req, res, next) => {
  res.sendFile(path.join(routeDir, "views", "our-services.html"));
});

module.exports = router;