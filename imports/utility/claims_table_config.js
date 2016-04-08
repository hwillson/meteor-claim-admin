import { Tabular } from 'meteor/aldeed:tabular';

import claims from '/imports/api/claims/collection.js';
import dateUtility from '/imports/utility/date.js';
import { SubsManager } from 'meteor/meteorhacks:subs-manager';

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
    { data: 'status', title: 'Claim Status' },
    {
      data: 'dateCreated',
      title: 'Date Created',
      render(value) {
        return dateUtility.formatDate(value);
      },
    },
  ],
  order: [[7, 'desc']],
  sub: new SubsManager(),
});

export default claimsTableConfig;
