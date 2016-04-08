import { Meteor } from 'meteor/meteor';

Meteor.publish('users.all', function publishUsersAll() {
  let cursor;
  if (this.userId) {
    cursor = Meteor.users.find({}, { fields: { emails: 1 } });
  } else {
    cursor = this.ready();
  }
  return cursor;
});
