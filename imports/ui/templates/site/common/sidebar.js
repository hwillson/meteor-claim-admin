import { Template } from 'meteor/templating';
import { i18n } from 'meteor/anti:i18n';

import pages from '../../../../api/pages/collection.js';

import './sidebar.html';

Template.siteSidebar.onCreated(function siteSidebarOnCreated() {
  this.subscribe('allPages');
});

Template.siteSidebar.helpers({

  sidebarExists() {
    return pages.find({
      language: i18n.getLanguage(),
    }).count();
  },

  sidebar() {
    return pages.findOne({
      slug: 'sidebar',
      language: i18n.getLanguage(),
    });
  },

});
