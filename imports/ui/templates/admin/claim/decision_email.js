import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { sendDecisionEmail } from '../../../../api/decision_email/methods';
import { createNote } from '../../../../api/claim_notes/methods';

import './decision_email.html';

Template.adminClaimDecisionEmail.events({
  'click .send-email-button'(event) {
    const $button = $(event.currentTarget);
    const buttonText = $button.html();
    $button.html('<i class="fa fa-cog fa-spin"></i>');
    sendDecisionEmail.call(
      { claimId: this._id },
      () => {
        $button.html(buttonText);
        $button.blur();
        $('.message-sent').show().delay(3000).fadeOut();
        createNote.call({
          claimId: this._id,
          content: 'Decision email sent to claimant (for claim status '
            + `"${this.status}").`,
        });
      }
    );
  },
});
