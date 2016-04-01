import { Template } from 'meteor/templating';
import { AutoForm } from 'meteor/aldeed:autoform';
import { CfsAutoForm } from 'meteor/cfs:autoform';

import siteDocuments from '/imports/api/site_documents/collection.js';
import { removeDocument } from '/imports/api/site_documents/methods.js';

import './documents.html';

Template.adminDocuments.onCreated(function onCreated() {
  this.subscribe('siteDocuments.all');
  this.subscribe('siteFiles.all');
});

Template.adminDocuments.helpers({

  docsExist() {
    let docsExist = false;
    if (siteDocuments.find().count() > 0) {
      docsExist = true;
    }
    return docsExist;
  },

  siteDocuments() {
    return siteDocuments.find().fetch();
  },

  collection() {
    return siteDocuments;
  },

});

Template.adminDocuments.events({

  'click .btn-delete'() {
    removeDocument.call({ docId: this._id });
  },

});

AutoForm.addHooks(
  ['siteDocumentsForm'],
  {
    before: {
      method: CfsAutoForm.Hooks.beforeInsert,
    },
    after: {
      method: CfsAutoForm.Hooks.afterInsert,
    },
  }
);
