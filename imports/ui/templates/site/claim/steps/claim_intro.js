import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './claim_intro.html';

Template.siteClaimIntro.helpers({

  emptySchema() {
    return new SimpleSchema();
  },

});
