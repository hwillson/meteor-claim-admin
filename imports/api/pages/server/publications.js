/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import pages from '../collection.js';

Meteor.publish('pages.all', function publishPagesAll() {
  return pages.find();
});

Meteor.publish('pages.single', function publishPagesSingle(pageId) {
  check(pageId, String);
  let cursor;
  if (this.userId) {
    cursor = pages.find({ _id: pageId });
  } else {
    cursor = this.ready();
  }
  return cursor;
});

Meteor.publish('pages.singleBySlug', function publishPagesSingleBySlug(slug) {
  check(slug, String);
  return pages.find({ slug });
});
