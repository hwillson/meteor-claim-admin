import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { i18n } from 'meteor/anti:i18n';

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
        template: 'siteClaimPurchases',
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
          Meteor.call(
            'insertClaim',
            claimData,
            _.bind(function (error, newClaim) {
              if (error) {
                this.done();
              } else {
                window.scrollTo(0, 0);
                Session.set('siteClaim', newClaim);
                FlowRouter.go('siteClaimSubmitted');
              }
            }, this)
          );
        }
      }

    ];
  },

  nextButton: function () {
    return i18n('claim.wizard.next');
  },

  backButton: function () {
    return i18n('claim.wizard.back');
  },

  confirmButton: function () {
    return i18n('claim.wizard.confirm');
  }

});
