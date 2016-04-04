import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';

import './welcome.html';

Template.adminWelcome.events({

  'click .login'(e) {
    e.stopPropagation();
    $('.dropdown-toggle').dropdown('toggle');
    $('#login-email').focus();
  },

});
