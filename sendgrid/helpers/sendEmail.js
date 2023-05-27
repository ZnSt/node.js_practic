const sendgrid = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sendgrid.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: 'znovastanislav@gmail.com' };

  try {
    await sendgrid.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
