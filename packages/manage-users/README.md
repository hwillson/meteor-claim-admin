# Manage Users

A roles based account management system.

*this package is a fork and heavily modified from 'meteor-accounts-admin-ui-bootstrap-3' by @hharnisc - thanks for the great work*

## Config

On the server, create a new file "adminUser.coffee" with email, password, and name (you can change your password later)

```
Meteor.startup ->
	if Meteor.users.find().fetch().length < 1
		Meteor.call 'addAdmin', "a@a.com", "password", "Administrator"
```

Navigate to /admin/users to add users, add roles to users,
create/manage roles, delete users and superAdmins can impersonate (to debug) users
