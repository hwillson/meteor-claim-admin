import { SyncedCron } from 'meteor/percolate:synced-cron';
import { Meteor } from 'meteor/meteor';

import exportClaims from '/imports/api/claims/export_claims.js';

if (!Meteor.settings.private.disableCron) {
  SyncedCron.add({
    name: 'Generate all claims CSV Export',
    schedule(parser) {
      return parser.text('every 15 minutes');
    },
    job() {
      exportClaims.allClaimsCsv();
    },
  });
  SyncedCron.start();
}
