// userAddress.js

const request = require("request");

// Function to initiate address collection using the Customer Information template
function customerAddress(senderPsid, PAGE_ACCESS_TOKEN, PAGE_ID) {
  const requestBody = {
    recipient: {
      id: senderPsid,
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "customer_information",
          countries: ["US"], // Replace with the desired countries
          business_privacy: {
            url: "PRIVACY-POLICY-URL",
          },
          expires_in_days: 7, // Change this as needed, up to 7 days
        },
      },
    },
  };

  // Send the POST request to initiate address collection
  request(
    {
      uri: `https://graph.facebook.com/${PAGE_ID}/messages?access_token=${PAGE_ACCESS_TOKEN}`,
      method: "POST",
      json: requestBody,
    },
    (err, _res, _body) => {
      if (!err) {
        console.log("Address collection initiated.");
      } else {
        console.error("Error initiating address collection:", err);
      }
    }
  );
}

module.exports = {
  customerAddress,
};
