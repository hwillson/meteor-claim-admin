import { Mongo } from 'meteor/mongo';

import siteDocumentSchema from './schema.js';

const siteDocuments = new Mongo.Collection('site_documents');
siteDocuments.attachSchema(siteDocumentSchema);

siteDocuments.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default siteDocuments;
