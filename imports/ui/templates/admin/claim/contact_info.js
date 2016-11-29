import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';
import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';

import claims from '../../../../api/claims/collection';
import './decision_email';
import './contact_info.html';

const isNewClaim = () => _.isEmpty(Session.get('currentClaimId'));

const lockForm = () => {
  if (isNewClaim()) {
    $('.btn-unlocked').show();
    $('.btn-locked, .btn-cancel-contact-info').hide();
  } else {
    $('.btn-unlocked').hide();
    $('.btn-locked').show();
    Session.set('isClaimFormLocked', true);
  }
};

const unlockForm = () => {
  $('.btn-locked').hide();
  $('.btn-unlocked').show();
  Session.set('isClaimFormLocked', false);
};

Template.adminClaimContactInfo.onCreated(
  function adminClaimContactInfoOnCreated() {
    const currentClaimId = Session.get('currentClaimId');
    if (currentClaimId) {
      this.subscribe('claims.single', currentClaimId);
    }
  }
);

Template.adminClaimContactInfo.helpers({
  newClaim() {
    return isNewClaim();
  },

  claimExists() {
    return claims.find().count();
  },

  claim() {
    return claims.findOne();
  },

  showDecisionEmail() {
    let showDecisionEmail = false;
    if (this.status.indexOf('rejected') === 0) {
      showDecisionEmail = true;
    }
    return showDecisionEmail;
  },

});

Template.adminClaimContactForm.onRendered(() => {
  lockForm();
});

Template.adminClaimContactForm.helpers({
  collection() {
    return claims;
  },

  formType() {
    let type;
    if (Session.get('isClaimFormLocked')) {
      type = 'disabled';
    } else if (isNewClaim()) {
      type = 'method';
    } else {
      type = 'method-update';
    }
    return type;
  },

  method() {
    let method;
    if (isNewClaim()) {
      method = 'claims.createClaimNoReceipt';
    } else {
      method = 'claims.updateClaim';
    }
    return method;
  },

  singleMethodArgument() {
    return !isNewClaim();
  },
});

Template.adminClaimContactForm.events({
  'click .btn-edit-contact-info'() {
    unlockForm();
    $('#claim-form').on('reset', () => {
      setTimeout(() => {
        lockForm();
      });
    });
  },
});

AutoForm.hooks({
  'claim-form': {
    onSuccess(formType, claimId) {
      if (formType === 'method') {
        Session.set('currentClaimId', claimId);
        FlowRouter.go(`/admin/claims/${claimId}`);
      } else {
        lockForm();
      }
    },
  },
});
