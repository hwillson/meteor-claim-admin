import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

import claimStatusLookup from '/imports/utility/lookups/claim_status_lookup.js';
import claimsTableConfig from '/imports/utility/claims_table_config.js';

import './claims.html';

Template.adminClaims.helpers({

  claimStati() {
    const claimStati = [];
    const selectedStatus = Session.get('adminSelectedClaimStatus');
    Object.keys(claimStatusLookup.codes).forEach((status) => {
      const statusCode = claimStatusLookup.codes[status];
      if (statusCode.id === selectedStatus) {
        statusCode.selected = 'selected';
      } else {
        statusCode.selected = null;
      }
      claimStati.push(statusCode);
    });
    return claimStati;
  },

  claimsTable() {
    return claimsTableConfig;
  },

  selector() {
    let statusFilter = {};
    const selectedStatus = Session.get('adminSelectedClaimStatus');
    if (selectedStatus !== claimStatusLookup.codes.all.id) {
      statusFilter = { status: selectedStatus };
    }
    return statusFilter;
  },

});

Template.adminClaims.events({

  'click .dataTable tbody tr'(event) {
    const claimId = $(event.currentTarget).find('td').first().html();
    if (claimId) {
      FlowRouter.go(`/admin/claims/${claimId}`);
    }
  },

  'change #claim-status'(event) {
    Session.set('adminSelectedClaimStatus', event.target.value);
  },

});
