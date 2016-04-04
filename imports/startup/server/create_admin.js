import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.startup(() => {
  const foundEmails = [];
  const users = [
    {
      email: Meteor.settings.public.initialAdminEmail,
      password: Meteor.settings.private.initialAdminPass,
      roles: ['admin'],
    },
  ];

  Meteor.users.find().forEach((doc) => {
    if (doc.emails) {
      foundEmails.push(doc.emails[0].address);
    }
  });

  users.forEach((user) => {
    if (foundEmails.indexOf(user.email) === -1) {
      const userId = Accounts.createUser({
        email: user.email,
        password: user.password,
      });
      Roles.addUsersToRoles(userId, user.roles);
    }
  });
});
