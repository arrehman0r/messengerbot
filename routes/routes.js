const express = require("express");
const path = require("path"); // Import the 'path' module
const router = express.Router();

router.get("/", function (_req, res) {
  const homePagePath = path.join(__dirname, "../public/home.html");
  res.sendFile(homePagePath);
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
router.get("/collect-address", function (_req, res) {
  // Use path.join to construct file path
  const termsPath = path.join(__dirname, "../public/customerAddressForm.html");
  res.sendFile(termsPath);
});

module.exports = router;
