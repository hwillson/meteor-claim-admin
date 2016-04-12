import { Tabular } from 'meteor/aldeed:tabular';

import claims from '/imports/api/claims/collection.js';
import dateUtility from '/imports/utility/date.js';
import claimStatusLookup from '/imports/utility/lookups/claim_status_lookup.js';

const claimsTableConfig = new Tabular.Table({
  name: 'claimsTable',
  collection: claims,
  columns: [
    { data: '_id', title: 'Internal Claim ID' },
    { data: 'referenceId', title: 'Claim ID' },
    { data: 'firstName', title: 'First Name' },
    { data: 'lastName', title: 'Last Name' },
    { data: 'email', title: 'Email' },
    { data: 'phone', title: 'Phone' },
    {
      data: 'status',
      title: 'Claim Status',
      render(statusId) {
        return claimStatusLookup.getLabel(statusId);
      },
    },
    {
      data: 'dateCreated',
      title: 'Date Created',
      render(value) {
        return dateUtility.formatDate(value);
      },
    },
  ],
  order: [[7, 'desc']],
});

export default claimsTableConfig;
