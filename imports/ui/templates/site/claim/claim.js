import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { i18n } from 'meteor/anti:i18n';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { createClaim } from '/imports/api/claims/methods.js';

import './claim.html';
import './steps/claim_steps.js';
import './steps/claim_intro.js';
import './steps/claim_contact_info.js';
import './steps/claim_purchase_info.js';
import './steps/claim_review.js';

Template.siteClaim.helpers({

  steps() {
    return [
      {
        id: 'intro',
        formId: 'claim-intro',
        title: i18n('claim.wizard.progress.intro'),
        template: 'siteClaimIntro',
      },
      {
        id: 'contact-info',
        formId: 'claim-contact-info',
        title: i18n('claim.wizard.progress.contactInfo'),
        template: 'siteClaimContactInfo',
      },
      {
        id: 'purchases',
        formId: 'claim-purchases-form',
        title: i18n('claim.wizard.progress.purchases'),
        template: 'siteClaimPurchaseInfo',
      },
      {
        id: 'review',
        formId: 'claim-review-form',
        title: i18n('claim.wizard.progress.review'),
        template: 'siteClaimReview',
        onSubmit(data, wizard) {
          $('.wizard-submit-button').addClass('no-after');
          $('.wizard-submit-button').html(
            '<i class="fa fa-refresh fa-spin"></i>'
          );
          const claimData = wizard.mergedData();
          // TODO - temp delete statements; will clean via schema properly
          delete claimData.declaration1;
          delete claimData.declaration2;
          delete claimData.declaration3;
          createClaim.call(claimData, (error, newClaim) => {
            if (error) {
              this.done();
            } else {
              window.scrollTo(0, 0);
              Session.set('siteClaim', newClaim);
              FlowRouter.go('siteClaimSubmitted');
            }
          });
        },
      },
    ];
  },

  nextButton() {
    return i18n('claim.wizard.next');
  },

  backButton() {
    return i18n('claim.wizard.back');
  },

  confirmButton() {
    return i18n('claim.wizard.confirm');
  },

});
