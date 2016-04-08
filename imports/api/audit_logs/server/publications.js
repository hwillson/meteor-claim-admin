import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import auditLogs from '../collection.js';

Meteor.publish(
  'auditLogs.forClaim',
  function publishAuditLogsForClaim(claimId) {
    check(claimId, String);
    let cursor;
    if (this.userId) {
      cursor = auditLogs.find({
        documentId: claimId,
      });
    } else {
      cursor = this.ready();
    }
    return cursor;
  }
);
