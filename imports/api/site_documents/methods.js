import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import siteFiles from '../site_files/collection.js';
import siteDocumentSchema from './schema.js';
import siteDocuments from './collection.js';
import throwNotAuthorizedException from '/imports/utility/not_authorized.js';

const createDocument = new ValidatedMethod({
  name: 'siteDocuments.createDocument',
  validate: siteDocumentSchema.validator(),
  run(doc) {
    if (this.userId) {
      siteDocuments.insert(doc);
    } else {
      throwNotAuthorizedException(this.name);
    }
  },
});

const removeDocument = new ValidatedMethod({
  name: 'siteDocuments.removeDocument',
  validate: new SimpleSchema({
    docId: {
      type: String,
    },
  }).validator(),
  run({ docId }) {
    if (this.userId) {
      siteFiles.remove({ _id: docId });
      siteDocuments.remove({ _id: docId });
    } else {
      throwNotAuthorizedException(this.name);
    }
  },
});

export { createDocument, removeDocument };
