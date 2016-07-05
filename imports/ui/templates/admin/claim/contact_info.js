import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { AutoForm } from 'meteor/aldeed:autoform';

import claims from '/imports/api/claims/collection.js';
import './decision_email';
import './contact_info.html';

const lockForm = () => {
  $('.btn-unlocked').hide();
  $('.btn-locked').show();
  Session.set('isClaimFormLocked', true);
};

const unlockForm = () => {
  $('.btn-locked').hide();
  $('.btn-unlocked').show();
  Session.set('isClaimFormLocked', false);
};

Template.adminClaimContactInfo.onCreated(
  function adminClaimContactInfoOnCreated() {
    this.subscribe('claims.single', Session.get('currentClaimId'));
  }
);

Template.adminClaimContactInfo.onRendered(() => {
  lockForm();
});

Template.adminClaimContactInfo.helpers({

  collection() {
    return claims;
  },

  claimExists() {
    return claims.find().count();
  },

  claim() {
    return claims.findOne();
  },

  formType() {
    let type = 'disabled';
    if (!Session.get('isClaimFormLocked')) {
      type = 'method-update';
    }
    return type;
  },

  showDecisionEmail() {
    let showDecisionEmail = false;
    if (this.status.indexOf('rejected') === 0) {
      showDecisionEmail = true;
    }
    return showDecisionEmail;
  },

});

Template.adminClaimContactInfo.events({

  'click .btn-edit-contact-info'() {
    unlockForm();
    $('#claim-form').on('reset', () => {
      setTimeout(() => {
        lockForm();
      });
    });
  },

  'click .claim-radio-reset'(event) {
    event.preventDefault();
    const schemaKey =
      $(event.currentTarget).next('.af-radio-group').data('schema-key');
    $(`input[name="${schemaKey}"]`).prop('checked', false);
    const set = {};
    set[schemaKey] = null;
    claims.update({
      _id: Session.get('currentClaimId'),
    }, {
      $set: set,
    });
  },

});

AutoForm.hooks({
  claimForm: {
    onSuccess() {
      lockForm();
    },
  },
});
