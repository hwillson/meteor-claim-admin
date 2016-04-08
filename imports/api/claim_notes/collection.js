import { Mongo } from 'meteor/mongo';

import claimNoteSchema from './schema.js';

const claimNotes = new Mongo.Collection('claim_notes');
claimNotes.attachSchema(claimNoteSchema);

claimNotes.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default claimNotes;
