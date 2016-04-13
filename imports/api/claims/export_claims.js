import { json2csv } from 'meteor/axw:json2csv';
import { FS } from 'meteor/cfs:base-package';
import { moment } from 'meteor/momentjs:moment';

import claims from './collection.js';
import dateUtility from '/imports/utility/date.js';
import exportFiles from '../export_files/collection.js';
import log from '/imports/utility/logger.js';

const exportClaims = (() => {
  let _public = {};
  let _private = {};

  _public = {

    allClaimsCsv() {
      const fileNamePrefix = 'all_claims';
      const records = claims.find({}, { timeout: false }).map((claim) => {
        const record = {
          'Claim ID': claim.referenceId,
          'Claim Status': claim.status,
          'Date Received': dateUtility.formatDate(claim.dateCreated),
          'First Name': claim.firstName,
          'Middle Name': _private.emptyStringIfUndefined(claim.middleName),
          'Last Name': claim.lastName,
          'E-mail': claim.email,
          Phone: claim.phone,
          'Street 1': claim.address.street1,
          'Street 2': _private.emptyStringIfUndefined(claim.address.street2),
          City: claim.address.city,
          Province: claim.address.province,
          'Postal Code': claim.address.postalCode,
          'Did Purchase': claim.didPurchase,
        };
        return record;
      });

      const csv = json2csv(records, true, true);
      const csvData = new Buffer(csv);
      const fileFilter = {
        'original.name': {
          $regex: `${fileNamePrefix}.*`,
        },
      };
      exportFiles.remove(fileFilter);
      const exportFile = new FS.File();
      exportFile.attachData(csvData, { type: 'text/csv' });
      const fileName =
        `${fileNamePrefix}_${moment().format('YYYY-MM-DD_HH-mm-ss')}.csv`;
      log.debug(`CSV export filename: ${fileName}`);
      exportFile.name(fileName);
      exportFiles.insert(exportFile);

      log.debug(`${records.length} records generated during CSV export.`);
      return records.length;
    },

  };

  _private = {

    emptyStringIfUndefined(value) {
      let newValue = '';
      if (value) {
        newValue = value;
      }
      return newValue;
    },

  };

  return _public;
})();

export default exportClaims;
