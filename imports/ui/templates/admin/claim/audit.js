import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';

import auditLogs from '/imports/api/audit_logs/collection.js';

import './audit.html';

Template.adminClaimAudit.onCreated(function adminClaimAuditOnCreated() {
  this.subscribe('auditLogs.forClaim', Session.get('currentClaimId'));
  this.subscribe('users.all');
});

Template.adminClaimAudit.helpers({

  auditLogsExist() {
    return auditLogs.find().count();
  },

  auditLogs() {
    return auditLogs.find({}, {
      sort: {
        dateLogged: -1,
      },
    });
  },

  showChanges(snapshot) {
    let changes = '';
    if (snapshot) {
      changes = JSON.stringify(_.omit(snapshot, ['_id']), null, 2);
    }
    return changes;
  },

  userEmail(userId) {
    let email = '';
    if (userId) {
      const user = Meteor.users.findOne({ _id: userId });
      if (user && user.emails) {
        email = user.emails[0].address;
      }
    }
    return email;
  },

});
