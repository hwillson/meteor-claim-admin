import { Meteor } from 'meteor/meteor';

import exportFiles from '../collection.js';

Meteor.publish('exportFiles.all', function publishExportFilesAll() {
  let cursor;
  if (this.userId) {
    cursor = exportFiles.find();
  } else {
    cursor = this.ready();
  }
  return cursor;
});
