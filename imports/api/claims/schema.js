import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Tracker } from 'meteor/tracker';
import { i18n } from 'meteor/anti:i18n';

import claimStatusLookup from '../../utility/lookups/claim_status_lookup.js';
import languageLookup from '../../utility/lookups/language_lookup.js';

const claimSchema = new SimpleSchema({
  referenceId: {
    type: Number,
    label: 'Claim ID',
    optional: true,
  },
  status: {
    type: String,
    label: 'Claim Status',
    optional: true,
    autoform: {
      type: 'select',
      firstOption: '',
      options() {
        return claimStatusLookup.labelValues();
      },
    },
  },
  audited: {
    type: Boolean,
    label: 'This claim has been audited',
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'boolean-checkbox',
      },
    },
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    autoform: {
      afFieldInput: {
        type: 'email',
      },
    },
  },
  firstName: {
    type: String,
    label: 'First Name',
    max: 100,
  },
  middleName: {
    type: String,
    label: 'Middle Name',
    max: 100,
    optional: true,
  },
  lastName: {
    type: String,
    label: 'Last Name',
    max: 100,
  },
  phone: {
    type: String,
    label: 'Telephone Number (during business hours)',
    min: 10,
    max: 12,
    regEx: /^\d{3}\-?\d{3}\-?\d{4}$/,
  },
  language: {
    type: String,
    label: 'Preferred Language',
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
  address: {
    type: Object,
    label: 'Mailing Address',
  },
  'address.street1': {
    type: String,
    label: 'Street 1',
    max: 100,
  },
  'address.street2': {
    type: String,
    label: 'Street 2',
    max: 100,
    optional: true,
  },
  'address.city': {
    type: String,
    label: 'City',
    max: 50,
  },
  'address.province': {
    type: String,
    label: 'Province',
    allowedValues: [
      'AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC',
      'SK', 'YT',
    ],
    autoform: {
      afFieldInput: {
        type: 'select',
        firstOption: '',
        options: 'allowed',
      },
    },
  },
  'address.postalCode': {
    type: String,
    label: 'Postal Code',
    max: 7,
    regEx: /^[abceghjklmnprstvxyABCEGHJKLMNPRSTVXY]{1}\d{1}[a-zA-Z]{1} *\d{1}[a-zA-Z]{1}\d{1}$/,
  },
});

// Validation Messages
Tracker.autorun(() => {
  claimSchema.messages({
    'required email': i18n('claim.contactInfo.emailRequired'),
    'regEx email': [
      { msg: i18n('claim.contactInfo.emailInvalid') },
    ],
    'required firstName': i18n('claim.contactInfo.firstNameRequired'),
    'required middleName': i18n('claim.contactInfo.middleNameRequired'),
    'required lastName': i18n('claim.contactInfo.lastNameRequired'),
    'required phone': i18n('claim.contactInfo.phoneRequired'),
    'minString phone': i18n('claim.contactInfo.phoneLength'),
    'regEx phone': [
      { msg: i18n('claim.contactInfo.phoneInvalid') },
    ],
    'required address.street1': i18n('claim.contactInfo.street1Required'),
    'required address.city': i18n('claim.contactInfo.cityRequired'),
    'required address.province': i18n('claim.contactInfo.provinceRequired'),
    'required address.postalCode': i18n('claim.contactInfo.postalCodeRequired'),
    'regEx address.postalCode': [
      { msg: i18n('claim.contactInfo.postalCodeInvalid') },
    ],
  });
});

export default claimSchema;
