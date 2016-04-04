Template.addUserModal.events({
  "click [data-action='submitAddUser']": function(e) {
    var email, name, password;
    e.preventDefault();
    name = $("[name='name']").val();
    email = $("[name='email']").val();
    password = $("[name='password']").val();
    Meteor.call('addUser', name, email, password, function(err, result) {
      if (err) {
        return console.log(err);
      }
    });
    return $('#addUser').modal('hide');
  }
});
