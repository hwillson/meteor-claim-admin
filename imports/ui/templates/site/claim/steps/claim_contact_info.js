import { Template } from 'meteor/templating';
import { i18n } from 'meteor/anti:i18n';

import claimSchema from '/imports/api/claims/schema.js';

import './claim_contact_info.html';

Template.siteClaimContactInfo.helpers({

  schema() {
    return claimSchema;
  },

  currentLanguage() {
    return i18n.getLanguage();
  },

});
