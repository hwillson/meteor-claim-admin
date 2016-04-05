import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Tracker } from 'meteor/tracker';
import { i18n } from 'meteor/anti:i18n';

const purchaseSchema = new SimpleSchema({
  didPurchase: {
    type: Boolean,
    autoform: {
      afFieldInput: {
        type: 'boolean-radios',
        trueLabel() {
          return i18n('general.yes');
        },
        falseLabel() {
          return i18n('general.no');
        },
      },
    },
  },
});

Tracker.autorun(() => {
  purchaseSchema.messages({
    'required didPurchase': i18n('claim.purchases.validation.didPurchase'),
  });
});


export default purchaseSchema;
