const express = require("express");
const router = express.Router();

router.get("/", function (_req, res) {
  res.send("Hello from bot once again");
});

module.exports = router;
