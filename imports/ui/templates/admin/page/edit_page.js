import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

import pages from '../../../../api/pages/collection.js';

import './edit_page.html';

Template.adminEditPage.onCreated(function adminEditPageOnCreated() {
  const pageId = Session.get('pageId');
  if (pageId) {
    this.subscribe('pages.single', pageId);
  }
});

Template.adminEditPage.helpers({

  formTitle() {
    let formTitle = 'Create a New Page';
    if (Session.get('pageId')) {
      formTitle = 'Edit Page';
    }
    return formTitle;
  },

  formType() {
    let formType = 'method';
    if (Session.get('pageId')) {
      formType = 'method-update';
    }
    return formType;
  },

  method() {
    return Session.get('pageId')
      ? 'pages.updatePage'
      : 'pages.createPage';
  },

  singleMethodArgument() {
    let singleMethodArgument = false;
    if (Session.get('pageId')) {
      singleMethodArgument = true;
    }
    return singleMethodArgument;
  },

  page() {
    return pages.findOne();
  },

  pages() {
    return pages;
  },

});

Template.adminEditPage.events({

  'click .btn-cancel'(e) {
    e.preventDefault();
    FlowRouter.go('adminPages');
  },

});
