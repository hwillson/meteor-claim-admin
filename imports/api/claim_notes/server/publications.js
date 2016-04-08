/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import claimNotes from '../collection.js';

Meteor.publish(
  'claimNotes.forClaim',
  function publishClaimNotesForClaim(claimId) {
    check(claimId, String);
    let cursor;
    if (this.userId) {
      cursor = claimNotes.find({ claimId });
    } else {
      cursor = this.ready();
    }
    return cursor;
  }
);
