const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: 'youraddress@gmail.com',
    pass: 'yourpassword'
  }
});

console.log(' transporter: ', transporter);
