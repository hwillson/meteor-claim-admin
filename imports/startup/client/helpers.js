import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.registerHelper('hasAccess', () => {
  let hasAccess = false;
  if (Meteor.userId()) {
    hasAccess = true;
  }
  return hasAccess;
});
