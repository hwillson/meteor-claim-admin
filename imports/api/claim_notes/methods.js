import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';

import claimNotes from './collection.js';
import claimNoteSchema from './schema.js';
import throwNotAuthorizedException from '/imports/utility/not_authorized.js';

const createNote = new ValidatedMethod({
  name: 'claimNotes.createNote',
  validate: claimNoteSchema.validator(),
  run(doc) {
    if (this.userId) {
      const user = Meteor.user();
      const note = _.extend(doc, {
        createdById: this.userId,
        createdByEmail: user.emails[0].address,
        createdOn: new Date(),
      });
      claimNotes.insert(note);
    } else {
      throwNotAuthorizedException(this.name);
    }
  },
});

export { createNote };
