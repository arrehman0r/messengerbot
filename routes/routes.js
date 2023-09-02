const express = require("express");
const router = express.Router();

router.get("/", function (_req, res) {
  res.send("Hello from bot once again yes!!");
});
router.get("/privacy-policy", function (_req, res) {
  res.sendFile(__dirname + "/public/privacy_policy.html");
});
router.get("/terms-and-services", function (_req, res) {
  res.sendFile(__dirname + "/public/terms.html");
});
module.exports = router;
