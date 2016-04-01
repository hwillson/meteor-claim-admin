import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

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

const removePage = new ValidatedMethod({
  name: 'pages.removePage',
  validate: new SimpleSchema({
    pageId: {
      type: String,
    },
  }).validator(),
  run({ pageId }) {
    if (this.userId) {
      pages.remove({ _id: pageId });
    } else {
      throwNotAuthorizedException(this.name);
    }
  },
});

export { createPage, updatePage, removePage };
