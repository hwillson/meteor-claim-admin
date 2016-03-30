Template.registerHelper('Diamond', Diamond);

Template.registerHelper('hasAccess', function () {
  var hasAccess = false;
  if (Meteor.userId()) {
    hasAccess = true;
  }
  return hasAccess;
});
