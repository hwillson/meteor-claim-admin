import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { i18n } from 'meteor/anti:i18n';

import languageLookup from '/imports/utility/lookups/language_lookup.js';

import './header.html';

Template.siteHeader.onCreated(function siteHeaderOnCreated() {
  // Whenever the session stored language changes, reset the top menu
  // active state so home is active.
  this.autorun(() => {
    if (Session.get('currentLanguage')) {
      $('.navbar li').removeClass('active');
      $('li.menu-home').addClass('active');
    }
  });
});

Template.siteHeader.helpers({

  languageToggle() {
    const toggle = {
      label: '',
      url: '/?lang=',
    };
    if (i18n.getLanguage() === languageLookup.english.value) {
      toggle.label = 'Fran&ccedil;ais';
      toggle.url += languageLookup.french.value;
    } else {
      toggle.label = 'English';
      toggle.url += languageLookup.english.value;
    }
    return toggle;
  },

  isActivePage(pageUrlKey) {
    let pageUrl;
    let isActivePage = '';
    if (pageUrlKey === '/') {
      pageUrl = '/';
    } else {
      pageUrl = i18n(pageUrlKey);
    }
    if (window.history.state.path === pageUrl) {
      isActivePage = 'active';
    }
    return isActivePage;
  },

});

Template.siteHeader.events({
  'click .navbar li'() {
    $('.navbar li').removeClass('active');
  },
});
