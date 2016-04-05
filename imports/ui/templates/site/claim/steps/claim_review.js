import { Template } from 'meteor/templating';

import claimReviewSchema from '/imports/api/claim_review/schema.js';

import './claim_review.html';
import './claim_review_declaration.html';

Template.siteClaimReview.helpers({

  claimData() {
    return this.wizard.mergedData();
  },

  schema() {
    return claimReviewSchema;
  },

});
