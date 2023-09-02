const express = require("express");
const path = require("path"); // Import the 'path' module
const router = express.Router();

router.get("/", function (_req, res) {
  res.send("Hello from bot once again yes!!");
});

router.get("/privacy-policy", function (_req, res) {
  // Use path.join to construct file path
  const privacyPolicyPath = path.join(
    __dirname,
    "../public/privacy_policy.html"
  );
  res.sendFile(privacyPolicyPath);
});

router.get("/terms-and-services", function (_req, res) {
  // Use path.join to construct file path
  const termsPath = path.join(__dirname, "../public/terms.html");
  res.sendFile(termsPath);
});

module.exports = router;
