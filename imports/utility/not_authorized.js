import { Meteor } from 'meteor/meteor';

const throwNotAuthorizedException = (methodName) => {
  throw new Meteor.Error(
    `${methodName}.notAuthorized`,
    'You are not authorized to perform this action.'
  );
};

export default throwNotAuthorizedException;
