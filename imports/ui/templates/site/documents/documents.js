import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import siteDocuments from '../../../../api/site_documents/collection.js';

import './documents.html';

Template.siteDocuments.onCreated(function siteDocumentsOnCreated() {
  this.subscribe('siteDocuments');
  this.subscribe('siteFiles');
});

const findDocuments = () => {
  const params = {
    language: Session.get('currentLanguage'),
  };
  return siteDocuments.find(params);
};

Template.siteDocuments.helpers({

  docsExist() {
    let docsExist = false;
    if (findDocuments().count() > 0) {
      docsExist = true;
    }
    return docsExist;
  },

  siteDocuments() {
    return findDocuments().fetch();
  },

});
