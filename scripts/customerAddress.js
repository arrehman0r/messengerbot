const request = require("request");

// Function to send a custom address collection form
function customerAddress(senderPsid) {
  const messageData = {
    recipient: {
      id: senderPsid,
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Please provide your address and phone number",
              subtitle: "Type your address and phone number below:",
              buttons: [
                {
                  type: "web_url",
                  url: "https://sore-pear-puppy-tam.cyclic.app/collect-address", // Replace with your own form URL
                  title: "Open Form",
                  webview_height_ratio: "full",
                },
              ],
            },
          ],
        },
      },
    },
  };

  // Send the POST request to initiate the custom form
  request(
    {
      uri: "https://graph.facebook.com/v2.6/me/messages",
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: "POST",
      json: messageData,
    },
    (err, _res, _body) => {
      if (!err) {
        console.log("Custom address collection form sent.");
      } else {
        console.error("Error sending custom form:", err);
      }
    }
  );
}

module.exports = {
  customerAddress,
};
