import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const claimNoteSchema = new SimpleSchema({
  content: {
    type: String,
    label: 'Add a New Note',
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  claimId: {
    type: String,
    optional: false,
    autoform: {
      afFieldInput: {
        type: 'hidden',
      },
      afFormGroup: {
        label: false,
      },
    },
  },
  createdById: {
    type: String,
    optional: true,
  },
  createdByEmail: {
    type: String,
    optional: true,
  },
  createdOn: {
    type: Date,
    optional: true,
  },
});

export default claimNoteSchema;
