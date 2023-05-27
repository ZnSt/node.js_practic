const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: '465',
  secure: true,
  auth: {
    user: 'znovastanislav@meta.ua',
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: 'xakot21245@mevori.com',
  from: 'znovastanislav@meta.ua',
  subject: 'Accept invite',
  html: '<p>Hello my friend! Please, accept our invite</p>',
};

transporter
  .sendMail(email)
  .then(() => console.log('Email accepted'))
  .catch((error) => console.log('error.message: ', error.message));
