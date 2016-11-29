import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './contact_info.js';
import './new_claim.html';

Template.adminNewClaim.onRendered(function adminNewClaimOnRendered() {
  Session.set('currentClaimId', null);
  Session.set('isClaimFormLocked', false);
});
