import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import throwNotAuthorizedException from '/imports/utility/not_authorized.js';
import emailUtility from '/imports/utility/email.js';

const sendDecisionEmail = new ValidatedMethod({
  name: 'decisionEmail.sendDecisionEmail',
  validate: new SimpleSchema({
    claimId: {
      type: String,
    },
  }).validator(),
  run({ claimId }) {
    if (!this.isSimulation) {
      if (this.userId) {
        emailUtility.sendDecisionEmail(claimId);
      } else {
        throwNotAuthorizedException(this.name);
      }
    }
  },
});

export { sendDecisionEmail };
