import { AuditedCollection } from 'meteor/cwohlman:audited-collections';

import claimSubmissionSchema from '../claim_submission/schema.js';

const claims = new AuditedCollection('claims');
claims.attachSchema(claimSubmissionSchema);

claims.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default claims;
