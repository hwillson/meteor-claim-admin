import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import sweetAlert from 'sweetalert';

import pages from '../../../../api/pages/collection.js';
import { removePage } from '../../../../api/pages/methods.js';

import './pages.html';

Template.adminPages.onCreated(function adminPagesOnCreated() {
  this.subscribe('pages.all');
});

Template.adminPages.helpers({

  pageCount() {
    return pages.find().count();
  },

  pages() {
    return pages.find();
  },

});

Template.adminPages.events({

  'click .btn-new-page'() {
    FlowRouter.go('/admin/pages/new');
  },

  'click .btn-edit'() {
    FlowRouter.go(`/admin/pages/edit?id=${this._id}`);
  },

  'click .btn-delete'() {
    const pageId = this._id;
    sweetAlert({
      title: 'Delete This Page?',
      text: 'Are you sure you want to remove this page? '
        + 'This action cannot be undone.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
    }, () => {
      removePage.call({ pageId });
    });
  },

});
