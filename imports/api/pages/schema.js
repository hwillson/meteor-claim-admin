import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import languageLookup from '../../utility/lookups/language_lookup.js';
import pageStatusLookup from '../../utility/lookups/page_status_lookup.js';

const pageSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
  },
  content: {
    type: String,
    label: 'Content',
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'summernote',
        settings: {
          height: 200,
          toolbar: [
            ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert', ['link', 'table', 'hr']],
            ['misc', ['codeview', 'undo', 'redo']],
          ],
        },
      },
    },
  },
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
  slug: {
    type: String,
    label: 'Slug',
  },
  status: {
    type: String,
    label: 'Status',
    autoform: {
      type: 'select',
      options() {
        return [
          {
            label: pageStatusLookup.draft.label,
            value: pageStatusLookup.draft.value,
          },
          {
            label: pageStatusLookup.published.label,
            value: pageStatusLookup.published.value,
          },
        ];
      },
    },
  },
});

export default pageSchema;
