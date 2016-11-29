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
        $or: [
          { documentId: claimId },
          { 'documentId.insertedIds.0': claimId },
        ],
      });
    } else {
      cursor = this.ready();
    }
    return cursor;
  }
);
