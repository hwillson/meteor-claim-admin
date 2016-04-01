import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { i18n } from 'meteor/anti:i18n';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import languageLookup from '../../utility/lookups/language_lookup.js';

import '../../ui/templates/admin/common/layout.js';
import '../../ui/templates/admin/welcome/welcome.js';
import '../../ui/templates/admin/user/layout.js';
import '../../ui/templates/admin/page/pages.js';
import '../../ui/templates/admin/page/edit_page.js';
import '../../ui/templates/admin/documents/documents.js';

const toggleSiteClass = function toggleSiteClass() {
  Meteor.defer(() => {
    $('html').removeClass('admin').addClass('site');
  });
};

const setLanguage = function setLanguage(context) {
  if (context.queryParams && context.queryParams.lang) {
    i18n.setLanguage(context.queryParams.lang);
    Session.set('currentLanguage', context.queryParams.lang);
  }
  if (!Session.get('currentLanguage')) {
    const defaultLanguage = languageLookup.english.value;
    i18n.setLanguage(defaultLanguage);
    Session.set('currentLanguage', defaultLanguage);
  }
};

const maintenaceModeCheck = function maintenaceModeCheck(context, redirect) {
  if (Meteor.settings.public.maintenaceMode && !Meteor.userId()) {
    redirect('/maintenance');
  }
};

// Public Site

FlowRouter.route('/', {
  triggersEnter: [toggleSiteClass, setLanguage, maintenaceModeCheck],
  action() {
    if (i18n.getLanguage() === languageLookup.english.value) {
      Session.set('slug', 'home');
      FlowRouter.go('/site/home');
    } else {
      Session.set('slug', 'accueil');
      FlowRouter.go('/site/accueil');
    }
  },
});

FlowRouter.route('/maintenance', {
  name: 'siteMaintenance',
  action() {
    if (Meteor.settings.public.maintenaceMode) {
      BlazeLayout.render('siteLayoutEmpty', { main: 'siteMaintenance' });
    } else {
      FlowRouter.go('/');
    }
  },
});

FlowRouter.route('/site/:slug', {
  name: 'sitePage',
  triggersEnter: [toggleSiteClass, setLanguage, maintenaceModeCheck],
  action(params, queryParams) {
    let slug = 'home';
    if (params && params.slug) {
      slug = params.slug;
    }
    Session.set('slug', slug);
    if (queryParams && queryParams.focus) {
      Session.set('siteContentFocus', queryParams.focus);
    } else {
      Session.set('siteContentFocus', null);
    }
    if (slug === 'documents') {
      BlazeLayout.render('siteLayout', { main: 'siteDocuments' });
    } else {
      BlazeLayout.render('siteLayout', { main: 'sitePage' });
    }
  },
});

FlowRouter.route('/site/claim/:step', {
  name: 'siteClaim',
  triggersEnter: [toggleSiteClass, setLanguage, maintenaceModeCheck],
  action() {
    BlazeLayout.render('siteLayout', { main: 'siteClaim' });
  },
});

FlowRouter.route('/site/receipt/claim', {
  name: 'siteClaimSubmitted',
  action() {
    BlazeLayout.render('siteLayout', { main: 'siteClaimSubmitted' });
  },
});

// Admin

const toggleAdminClass = function toggleAdminClass() {
  Meteor.defer(() => {
    $('html').removeClass('site').addClass('admin');
  });
};

const ensureAdminLoggedIn = function ensureAdminLoggedIn(context, redirect) {
  if (!Meteor.userId()) {
    redirect('/admin');
  }
};

FlowRouter.route('/admin', {
  name: 'adminWelcome',
  triggersEnter: [toggleAdminClass],
  action() {
    BlazeLayout.render('adminLayout', { main: 'adminWelcome' });
  },
});

FlowRouter.route('/admin/users', {
  name: 'adminUsers',
  triggersEnter: [toggleAdminClass, ensureAdminLoggedIn],
  action() {
    BlazeLayout.render('adminUsersLayout', { main: 'accountsAdmin' });
  },
});

FlowRouter.route('/admin/pages', {
  name: 'adminPages',
  triggersEnter: [toggleAdminClass, ensureAdminLoggedIn],
  action() {
    BlazeLayout.render('adminLayout', { main: 'adminPages' });
  },
});

FlowRouter.route('/admin/pages/new', {
  name: 'adminEditPage',
  triggersEnter: [toggleAdminClass, ensureAdminLoggedIn],
  action() {
    Session.set('pageId', null);
    BlazeLayout.render('adminLayout', { main: 'adminEditPage' });
  },
});

FlowRouter.route('/admin/pages/edit', {
  name: 'adminEditPage',
  triggersEnter: [toggleAdminClass, ensureAdminLoggedIn],
  action(params, queryParams) {
    if (queryParams && queryParams.id) {
      Session.set('pageId', queryParams.id);
      BlazeLayout.render('adminLayout', { main: 'adminEditPage' });
    }
  },
});

FlowRouter.route('/admin/documents', {
  name: 'adminDocuments',
  triggersEnter: [toggleAdminClass, ensureAdminLoggedIn],
  action() {
    BlazeLayout.render('adminLayout', { main: 'adminDocuments' });
  },
});

FlowRouter.route('/admin/claims', {
  name: 'adminClaims',
  triggersEnter: [toggleAdminClass, ensureAdminLoggedIn],
  action() {
    BlazeLayout.render('adminLayout', { main: 'adminClaims' });
  },
});

FlowRouter.route('/admin/claims/:claimId', {
  name: 'adminClaim',
  triggersEnter: [toggleAdminClass, ensureAdminLoggedIn],
  action(params) {
    if (params) {
      Session.set('currentClaimId', params.claimId);
    }
    BlazeLayout.render('adminLayout', { main: 'adminClaim' });
  },
});

FlowRouter.route('/admin/reports', {
  name: 'adminReports',
  triggersEnter: [toggleAdminClass, ensureAdminLoggedIn],
  action() {
    BlazeLayout.render('adminLayout', { main: 'adminReports' });
  },
});
