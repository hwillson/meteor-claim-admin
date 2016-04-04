import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';

import './footer.html';

Template.adminFooter.helpers({
  year() {
    return moment().year();
  },
  companyName() {
    return Meteor.settings.public.admin.companyName;
  },
  companyUrl() {
    return Meteor.settings.public.admin.companyUrl;
  },
});
