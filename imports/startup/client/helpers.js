import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import dateUtility from '/imports/utility/date.js';

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

Template.registerHelper('claimSubmissionsEnabled', () => {
  const claimSubmissionsEnabled =
    Meteor.settings.public.claimSubmissionsEnabled;
  return claimSubmissionsEnabled;
});

Template.registerHelper('indexedArray', (context) => {
  let indexedArray;
  if (context) {
    indexedArray = context.map((item, index) => {
      const newItem = item;
      newItem._index = index + 1;
      return newItem;
    });
  }
  return indexedArray;
});

Template.registerHelper('formatDate', (date) => {
  const formattedDate = dateUtility.formatDate(date);
  return formattedDate;
});

Template.registerHelper('formatDateWithTime', (date) => {
  const formattedDate = dateUtility.formatDateWithTime(date);
  return formattedDate;
});

Template.registerHelper('currentClaimId', () => {
  const currentClaimId = Session.get('currentClaimId');
  return currentClaimId;
});
