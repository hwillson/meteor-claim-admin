import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { incrementCounter } from 'meteor/osv:mongo-counter';

import claimSubmissionSchema from '../claim_submission/schema.js';
import claims from './collection.js';
import claimSchema from './schema.js';
import claimStatusLookup from '/imports/utility/lookups/claim_status_lookup.js';
import throwNotAuthorizedException from '/imports/utility/not_authorized.js';
// import emailUtility from '/imports/utility/email.js';

const createClaim = new ValidatedMethod({
  name: 'claims.createClaim',
  validate: claimSubmissionSchema.validator(),
  run(doc) {
    let newClaim;
    if (!this.isSimulation) {
      newClaim = doc;
      newClaim.referenceId = incrementCounter('counters', 'claimId');
      newClaim.status = claimStatusLookup.codes.received.id;
      const claimId = claims.insert(newClaim);
      // Meteor.call('emailClaimReceipt', claimId);
    }
    return newClaim;
  },
});

const updateClaim = new ValidatedMethod({
  name: 'claims.updateClaim',
  validate(args) {
    claimSchema.validate(args.modifier, { modifier: true });
  },
  run(args) {
    if (this.userId) {
      claims.update(args._id, args.modifier);
    } else {
      throwNotAuthorizedException(this.name);
    }
  },
});


export { createClaim, updateClaim };
