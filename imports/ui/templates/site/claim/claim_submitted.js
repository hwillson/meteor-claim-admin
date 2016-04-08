import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './claim_submitted.html';

Template.siteClaimSubmitted.helpers({

  claim() {
    return Session.get('siteClaim');
  },

});
