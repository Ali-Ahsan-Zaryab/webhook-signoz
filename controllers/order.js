const router = require('../routes/order');
const nodemailer = require("nodemailer");


let _options = {
  host: 'smtp.socketlabs.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: 'server15997',
      pass: 'Rd26PcGs4q8Q7HpJb'
  },
};

const handleWebhook = (req, res) => {
  // Process the webhook payload here

 let _message = {};
 // Array of email addresses
 const toEmails = ['anotheremail@example.com', 'moreemail@example.com'];
// Loop through each alert in req.body.alerts array
for (let i = 0; i < req.body.alerts.length; i++) {
  let alert = req.body.alerts[i];

  _message = {
    from: 'no-reply@pumasight.com',
    to: toEmails,
    subject: alert.labels.alertname,
    html: '<html>' + alert.annotations.description + JSON.stringify(alert.labels) + '</html>'
  };

  // Call the main function for each alert
  main(_message);
}

async function main(message) {
  let transporter = nodemailer.createTransport(_options);
  await transporter.sendMail(message, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.response);
  });
}
  // Send a response
  res.json({ message: 'Webhook received successfully' });
};


module.exports = {

  handleWebhook,
};
