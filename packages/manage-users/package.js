Package.describe({
  name: "hwillson:manage-users",
  summary: "A roles based account management system",
  version: "0.3.0",
  git: "git@github.com:cfly15/meteor-manage-users.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('standard-app-packages', ['client', 'server']);
  api.use("alanning:roles@1.2.13", ['client', 'server']);

  api.add_files('libs/user_query.js', ['client', 'server']);

  api.add_files('client/startup.js', 'client');
  api.add_files('client/accounts_admin.html', 'client');
  api.add_files('client/accounts_admin.js', 'client');
  api.add_files('client/delete_account_modal.html', 'client');
  api.add_files('client/delete_account_modal.js', 'client');
  api.add_files('client/info_account_modal.html', 'client');
  api.add_files('client/info_account_modal.js', 'client');
  api.add_files('client/update_account_modal.html', 'client');
  api.add_files('client/update_account_modal.js', 'client');
  api.add_files('client/update_roles_modal.html', 'client');
  api.add_files('client/update_roles_modal.js', 'client');
  api.add_files('client/add_user_modal.html', 'client');
  api.add_files('client/add_user_modal.js', 'client');

  api.add_files('style/style.css', 'client');

  api.add_files('server/startup.js', 'server');
  api.add_files('server/publish.js', 'server');
  api.add_files('server/methods.js', 'server');

  api.export('ManageUsers', ['server', 'client']);
});
