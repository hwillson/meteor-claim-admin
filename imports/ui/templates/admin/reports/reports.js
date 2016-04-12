import { Template } from 'meteor/templating';

import exportFiles from '/imports/api/export_files/collection.js';

import './reports.html';

Template.adminReports.onCreated(function adminReportsOnCreated() {
  this.subscribe('exportFiles.all');
});

Template.adminReports.helpers({
  allClaimsCsv() {
    return exportFiles.findOne();
  },
});
