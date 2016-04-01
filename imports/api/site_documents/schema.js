import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import languageLookup from '../../utility/lookups/language_lookup.js';

const siteDocumentSchema = new SimpleSchema({
  language: {
    type: String,
    label: 'Language',
    autoform: {
      type: 'select',
      options() {
        return [
          {
            label: languageLookup.english.label,
            value: languageLookup.english.value,
          },
          {
            label: languageLookup.french.label,
            value: languageLookup.french.value,
          },
        ];
      },
    },
  },
  description: {
    type: String,
    label: 'Optional Description',
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  fileId: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'cfs-file',
        collection: 'site_files',
      },
    },
  },
});

export default siteDocumentSchema;
