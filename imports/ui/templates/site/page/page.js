import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { i18n } from 'meteor/anti:i18n';
import { Meteor } from 'meteor/meteor';

import pages from '../../../../api/pages/collection.js';

import './page.html';

Template.sitePage.onCreated(function sitePageOnCreated() {
  this.subscribe('pages.all');
});

Template.sitePage.onRendered(function sitePageOnRendered() {
  this.autorun(() => {
    if (Session.get('siteContentFocus')) {
      Meteor.defer(() => {
        $(`.focus-${Session.get('siteContentFocus')}`).next().slideToggle();
      });
      // setTimeout(() => {
      //   $(`.focus-${Session.get('siteContentFocus')}`).next().slideToggle();
      // }, 500);
    }
  });
});

Template.sitePage.helpers({

  page() {
    return pages.findOne({
      slug: Session.get('slug'),
      language: i18n.getLanguage(),
    });
  },

  slug() {
    return Session.get('slug');
  },

});

Template.sitePage.events({

  'click .toggle-link'(event) {
    const $toggleLink = $(event.currentTarget);
    $toggleLink.next().slideToggle();
  },

});
