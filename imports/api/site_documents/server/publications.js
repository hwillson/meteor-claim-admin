/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import siteDocuments from '../collection.js';

Meteor.publish('siteDocuments.all', function publishSiteDocumentsAll() {
  return siteDocuments.find();
});
