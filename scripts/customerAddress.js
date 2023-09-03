const request = require("request");

// Function to send the Structured Information Template
function customerAddress(senderPsid) {
  const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

  const messageData = {
    recipient: {
      id: senderPsid,
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "customer_information",
          countries: ["PK"],
          business_privacy: {
            url: "https://sore-pear-puppy-tam.cyclic.app/privacy-policy",
          },
          expires_in_days: 1,
          fields: [
            {
              name: "shipping_address",
              type: "address",
            },
          ],
        },
      },
    },
  };

  // Send the POST request to initiate the Structured Information Template
  request(
    {
      uri: "https://graph.facebook.com/v13.0/me/messages",
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: "POST",
      json: messageData,
    },
    (err, _res, _body) => {
      if (!err) {
        console.log("Structured Information Template sent.");
      } else {
        console.error("Error sending Structured Information Template:", err);
      }
    }
  );
}

module.exports = {
  customerAddress,
};
