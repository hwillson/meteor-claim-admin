import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import claimNotes from '/imports/api/claim_notes/collection.js';

import './notes.html';

Template.adminClaimNotes.onCreated(function adminClaimNotesOnCreated() {
  this.subscribe('claimNotes.forClaim', Session.get('currentClaimId'));
});

Template.adminClaimNotes.helpers({

  collection() {
    return claimNotes;
  },

  notesExist() {
    return claimNotes.find().count();
  },

  claimNotes() {
    return claimNotes.find({}, {
      sort: {
        createdOn: -1,
      },
    }).fetch();
  },

});
