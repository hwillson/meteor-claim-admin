import { AuditedCollection } from 'meteor/cwohlman:audited-collections';

import claimSchema from './schema.js';

const claims = new AuditedCollection('claims');
claims.attachSchema(claimSchema);

claims.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default claims;
