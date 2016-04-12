import { Meteor } from 'meteor/meteor';

export default function () {
  return require('mailgun-js')({
    apiKey: Meteor.settings.private.email.mailgun.apiKey,
    domain: Meteor.settings.private.email.mailgun.domain,
  });
}
