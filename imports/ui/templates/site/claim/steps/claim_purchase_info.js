import { Template } from 'meteor/templating';

import purchaseSchema from '/imports/api/purchases/schema.js';

import './claim_purchase_info.html';

Template.siteClaimPurchaseInfo.helpers({

  schema() {
    return purchaseSchema;
  },

});
