async function customerAddress(senderPsid) {
  const request = new XMLHttpRequest();
  const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

  request.open(
    "POST",
    "https://graph.facebook.com/v17.0/110403342158265/messages?access_token=" +
      PAGE_ACCESS_TOKEN
  );
  request.setRequestHeader("Content-Type", "application/json");

  const data = {
    recipient: {
      id: senderPsid,
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "customer_information",
          countries: ["US"],
          business_privacy: {
            url: "https://trekhills.com/privacy-policy",
          },
          expires_in_days: 1,
        },
      },
    },
  };

  request.send(JSON.stringify(data));

  const response = await request.response;

  if (request.status === 200) {
    console.log("Message sent successfully");
  } else {
    console.log("Error sending message:", response);
  }
}
module.exports = customerAddress;
