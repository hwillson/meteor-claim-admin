Meteor.publish('roles', function (){
  return Meteor.roles.find({});
});

Meteor.publish('filteredUsers', function (filter) {
  if (filter) {
    check(filter, Object);
  } else {
    check(filter, Match.Any);
  }
  return filteredUserQuery(this.userId, filter);
});
