import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import pageSchema from './schema.js';
import pages from './collection.js';

const throwNotAuthorizedException = (methodName) => {
  throw new Meteor.Error(
    `${methodName}.notAuthorized`,
    'You are not authorized to perform this action.'
  );
};

const createPage = new ValidatedMethod({
  name: 'pages.createPage',
  validate: pageSchema.validator(),
  run(doc) {
    if (this.userId) {
      pages.insert(doc);
    } else {
      throwNotAuthorizedException(this.name);
    }
  },
});

const updatePage = new ValidatedMethod({
  name: 'pages.updatePage',
  validate(args) {
    pageSchema.validate(args.modifier, { modifier: true });
  },
  run(args) {
    if (this.userId) {
      pages.update(args._id, args.modifier);
    } else {
      throwNotAuthorizedException(this.name);
    }
  },
});

export { createPage, updatePage };
