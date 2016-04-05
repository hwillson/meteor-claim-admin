import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import claimSchema from './schema.js';
import claims from './collection.js';

const throwNotAuthorizedException = (methodName) => {
  throw new Meteor.Error(
    `${methodName}.notAuthorized`,
    'You are not authorized to perform this action.'
  );
};

const createClaim = new ValidatedMethod({
  name: 'claims.createClaim',
  validate: claimSchema.validator(),
  run(doc) {
    if (this.userId) {
      claims.insert(doc);
    } else {
      throwNotAuthorizedException(this.name);
    }
  },
});

export { createClaim };
