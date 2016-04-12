import { Meteor } from 'meteor/meteor';
import { i18n } from 'meteor/anti:i18n';
import { PDFDocument } from 'meteor/pascoual:pdfkit';
import mailgun from './mailgun.js';

import claims from '/imports/api/claims/collection.js';
import dateUtility from '/imports/utility/date.js';

const emailUtility = (() => {
  let _private = {};

  const _public = {

    sendEmail(to, from, subject, message, attachment) {
      if (Meteor.settings.private.email.enabled) {
        if (to && from && subject && message) {
          const loadedMailgun = mailgun();
          const email = { to, from, subject, html: message };
          if (attachment) {
            email.attachment = new loadedMailgun.Attachment(attachment);
          }
          loadedMailgun.messages().send(email);
        }
      }
    },

    emailClaimReceipt(claimId) {
      const claim = claims.findOne({ _id: claimId });
      if (claim) {
        i18n.setLanguage(claim.language);
        const content = `
          <p>
            <strong>
              ${i18n('email.submitted.claimId')}
              ${claim.referenceId}
            </strong>
            <br/>
            ${i18n('email.submitted.claimDate')}
            ${dateUtility.formatDateWithTime(claim.dateCreated)}
            <br/>
          </p>
          <p>
            ${i18n(
              'email.submitted.thankYou',
              `${claim.firstName} ${claim.lastName}`
            )}
          </p>
          <p><strong>${i18n('email.submitted.step1')}</strong></p>
          <p>${i18n('email.submitted.confirm')}</p>
          <p><strong>${i18n('email.submitted.step2')}</strong></p>
          <p>${i18n('email.submitted.notYetApproved')}</p>
          <p><strong>${i18n('email.submitted.step3')}</strong></p>
          <p>${i18n('email.submitted.review')}</p>
          <p>${i18n('email.submitted.patience')}</p>
          <p>${i18n('email.submitted.claimAdmin')}</p>
        `;
        const attachments = _private.buildReceiptPdfAttachment(claimId);

        const infoEmail = Meteor.settings.private.email.info;
        const claimSubmissionEmail =
          Meteor.settings.private.email.claimsubmission;

        // Send claimant claim receipt
        _public.sendEmail(
          claim.email,
          infoEmail,
          i18n('email.submitted.title'),
          content,
          attachments
        );

        // Send admin claim receipt
        _public.sendEmail(
          claimSubmissionEmail,
          infoEmail,
          i18n('email.submitted.title'),
          content,
          attachments
        );
      }
    },

  };

  _private = {
    buildReceiptPdfAttachment(claimId) {
      let attachment;
      const claim = claims.findOne({ _id: claimId });
      if (claim) {
        i18n.setLanguage(claim.language);
        const doc = new PDFDocument({ size: 'A4', margin: 50 });
        let prefix;
        if (process.env.NODE_ENV === 'development') {
          prefix = `${process.env.PWD}/public`;
        } else {
          prefix = '/app/bundle/programs/web.browser/app';
        }
        doc.registerFont('Cardo', `${prefix}/fonts/Cardo104s.ttf`);
        const lineGap = 12;

        // Claim overview
        doc.font('Cardo');
        doc.fillColor('#0099da').fontSize(16);
        doc.text(i18n('email.submitted.claimDetails'), { lineGap });
        doc.fontSize(12);
        doc.fillColor('black')
          .text(i18n('email.submitted.claimId'), { lineGap, continued: true })
          .fillColor('grey')
          .text(` ${claim.referenceId}`, { lineGap });
        doc.fillColor('black')
          .text(i18n('email.submitted.claimDate'), { lineGap, continued: true })
          .fillColor('grey')
          .text(` ${dateUtility.formatDateWithTime(claim.dateCreated)}`, { lineGap });
        doc.moveDown(3);

        // Contact info
        doc.fillColor('#0099da').fontSize(16);
        doc.text(i18n('claim.contactInfo.title'), { lineGap });
        doc.fontSize(12);
        doc.fillColor('black')
          .text(i18n('claim.contactInfo.email'), { lineGap, continued: true })
          .fillColor('grey')
          .text(`: ${claim.email}`, { lineGap });
        doc.fillColor('black')
          .text(i18n('claim.contactInfo.firstName'), { lineGap, continued: true })
          .fillColor('grey')
          .text(`: ${claim.firstName}`, { lineGap });
        if (claim.middleName) {
          doc.fillColor('black')
            .text(i18n('claim.contactInfo.middleName'), { lineGap, continued: true })
            .fillColor('grey')
            .text(`: ${claim.middleName}`, { lineGap });
        }
        doc.fillColor('black')
          .text(i18n('claim.contactInfo.lastName'), { lineGap, continued: true })
          .fillColor('grey')
          .text(`: ${claim.lastName}`, { lineGap });
        doc.fillColor('black')
          .text(i18n('claim.contactInfo.phone'), { lineGap, continued: true })
          .fillColor('grey')
          .text(`: ${claim.phone}`, { lineGap });
        doc.moveDown(3);

        // Mailing address
        doc.fillColor('#0099da').fontSize(16);
        doc.text(i18n('claim.contactInfo.mailingAddress'), { lineGap });
        doc.fontSize(12);
        doc.fillColor('black')
          .text(i18n('claim.contactInfo.street1'), { lineGap, continued: true })
          .fillColor('grey')
          .text(`: ${claim.address.street1}`, { lineGap });
        if (claim.address.street2) {
          doc.fillColor('black')
            .text(i18n('claim.contactInfo.street2'), { lineGap, continued: true })
            .fillColor('grey')
            .text(`: ${claim.address.street2}`, { lineGap });
        }
        doc.fillColor('black')
          .text(i18n('claim.contactInfo.city'), { lineGap, continued: true })
          .fillColor('grey')
          .text(`: ${claim.address.city}`, { lineGap });
        doc.fillColor('black')
          .text(i18n('claim.contactInfo.province'), { lineGap, continued: true })
          .fillColor('grey')
          .text(`: ${claim.address.province}`, { lineGap });
        doc.fillColor('black')
          .text(i18n('claim.contactInfo.postalCode'), { lineGap, continued: true })
          .fillColor('grey')
          .text(`: ${claim.address.postalCode}`, { lineGap });
        doc.moveDown(3);

        // Purchases
        doc.fillColor('#0099da').fontSize(16);
        doc.text(i18n('claim.purchases.title'), { lineGap });
        doc.fontSize(12);
        doc.fillColor('black')
          .text(i18n('claim.purchases.didYouPurchase'), { lineGap, continued: true })
          .fillColor('grey')
          .text(`: ${claim.didPurchase}`, { lineGap });
        doc.moveDown(3);

        attachment = {
          filename: i18n('email.submitted.pdfReceipt'),
          data: doc.outputSync(),
        };
      }

      return attachment;
    },
  };

  return _public;
})();

export default emailUtility;
