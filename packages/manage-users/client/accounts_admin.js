Template.accountsAdmin.helpers({
  users: function() {
    return filteredUserQuery(Meteor.userId(), Session.get("userFilter"));
  },

  email: function () {
    if (this.emails && this.emails.length)
      return this.emails[0].address;

    if (this.services) {
      //Iterate through services
      for (var serviceName in this.services) {
        var serviceObject = this.services[serviceName];
        //If an 'id' isset then assume valid service
        if (serviceObject.id) {
          if (serviceObject.email) {
            return serviceObject.email;
          }
        }
      }
    }
    return "";
  },

  searchFilter: function() {
    return Session.get("userFilter");
  },

  myself: function(userId) {
    return Meteor.userId() === userId;
  }
});

// search no more than 2 times per second
var setUserFilter = _.throttle(function(template) {
  var search = template.find(".search-input-filter").value;
  Session.set("userFilter", search);
}, 500);

Template.accountsAdmin.events({
  'keyup .search-input-filter': function(event, template) {
        setUserFilter(template);
        return false;
    },

    'click [data-action="delete"]': function(event, template) {
    Session.set('userInScope', this);
    },

    'click [data-action="info"]': function(event, template) {
    Session.set('userInScope', this);
    },

    'click [data-action="update"]': function(event, template) {
    Session.set('userInScope', this);
    },

    'click [data-action="addUser"]': function(event, template) {
    Session.set('userInScope', this);
    },

    'click [data-action="impersonate"]': function(event, template) {
      event.preventDefault()
      Session.set('impersonate', this._id);
      Meteor.call('impersonate', this._id, Meteor.userId(), function(err, result) {
        if (err)
          console.log(err);
        Meteor.connection.setUserId(Session.get('impersonate'));
        Router.go('/');
      });
    }
});

Template.accountsAdmin.rendered = function() {
  var searchElement = document.getElementsByClassName('search-input-filter');
  if(!searchElement)
    return;
  var filterValue = Session.get("userFilter");

  var pos = 0;
  if (filterValue)
    pos = filterValue.length;

  searchElement[0].focus();
  searchElement[0].setSelectionRange(pos, pos);
};
