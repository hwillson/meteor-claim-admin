import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.registerHelper('hasAccess', () => {
  let hasAccess = false;
  if (Meteor.userId()) {
    hasAccess = true;
  }
  return hasAccess;
});

Template.registerHelper('adminEmail', () => {
  const adminEmail = Meteor.settings.public.admin.initialAdminEmail;
  return adminEmail;
});

Template.registerHelper('projectName', () => {
  const projectName = Meteor.settings.public.admin.projectName;
  return projectName;
});
