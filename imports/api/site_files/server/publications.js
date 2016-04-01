/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import siteFiles from '../collection.js';

Meteor.publish('siteFiles.all', function publishSiteFilesAll() {
  return siteFiles.find();
});
