/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import claims from '../collection.js';

// Import Tabular claims table config, then store it as a global since
// that's where Tabular expects to see it.
import claimsTableConfig from '/imports/utility/claims_table_config.js';
global.claimsTableConfig = claimsTableConfig;

Meteor.publish('claims.all', function publishClaimsAll() {
  let cursor;
  if (this.userId) {
    cursor = claims.find({}, {
      referenceId: 1,
      case: 1,
      firstName: 1,
      lastName: 1,
      email: 1,
      phone: 1,
      status: 1,
      dateCreated: 1,
    });
  } else {
    cursor = this.ready();
  }
  return cursor;
});

Meteor.publish('claims.single', function publishClaimsSingle(claimId) {
  check(claimId, String);
  let cursor;
  if (this.userId) {
    cursor = claims.find({
      _id: claimId,
    }, {
      fields: {
        dateModified: 0,
      },
    });
  } else {
    cursor = this.ready();
  }
  return cursor;
});
