import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { incrementCounter } from 'meteor/osv:mongo-counter';

import claimSubmissionSchema from '../claim_submission/schema.js';
import claims from './collection.js';
import claimStatusLookup from '../../utility/lookups/claim_status_lookup.js';
import throwNotAuthorizedException from '../../utility/not_authorized.js';
import emailUtility from '../../utility/email.js';

const insertClaim = (claim, emailClaimReceipt) => {
  const newClaim = claim;
  newClaim.referenceId = incrementCounter('counters', 'claimId');
  if (!newClaim.status) {
    newClaim.status = claimStatusLookup.codes.received.id;
  }
  const claimId = claims.insert(newClaim);
  if (emailClaimReceipt) {
    emailUtility.emailClaimReceipt(claimId);
  }
  return claimId;
};

const createClaim = new ValidatedMethod({
  name: 'claims.createClaim',
  validate: claimSubmissionSchema.validator(),
  run(doc) {
    let claimId;
    if (!this.isSimulation) {
      claimId = insertClaim(doc, true);
    }
    return claimId;
  },
});

const createClaimNoReceipt = new ValidatedMethod({
  name: 'claims.createClaimNoReceipt',
  validate: claimSubmissionSchema.validator(),
  run(doc) {
    let claimId;
    if (!this.isSimulation) {
      claimId = insertClaim(doc, false);
    }
    return claimId;
  },
});

const updateClaim = new ValidatedMethod({
  name: 'claims.updateClaim',
  validate(args) {
    claimSubmissionSchema.validate(args.modifier, { modifier: true });
  },
  run(args) {
    if (this.userId) {
      claims.update(args._id, args.modifier);
    } else {
      throwNotAuthorizedException(this.name);
    }
  },
});

export { createClaim, createClaimNoReceipt, updateClaim };
