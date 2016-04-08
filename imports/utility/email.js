import { Meteor } from 'meteor/meteor';
const mailgun = require('mailgun-js')({
  apiKey: Meteor.settings.private.email.mailgun.apiKey,
  domain: Meteor.settings.private.email.mailgun.domain,
});

const emailUtility = {

  sendEmail(to, from, subject, message, attachment) {
    if (Meteor.settings.private.email.enabled) {
      if (to && from && subject && message) {
        const email = { to, from, subject, text: message };
        if (attachment) {
          email.attachment = attachment;
        }
        mailgun.messages().send(email, (error, body) => {
          // TODO - just for testing
          console.log(error, body);
        });
      }
    }
  },

};

export default emailUtility;
