import { AuditedCollection } from 'meteor/cwohlman:audited-collections';

import pageSchema from './schema.js';

const pages = new AuditedCollection('pages');
pages.attachSchema(pageSchema);

pages.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default pages;
