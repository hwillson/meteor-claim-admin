import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { i18n } from 'meteor/anti:i18n';

const claimReview = new SimpleSchema({
  declaration1: {
    type: Boolean,
    label() {
      return i18n('claim.review.solDec.declaration1');
    },
    allowedValues: [true],
  },
  declaration2: {
    type: Boolean,
    label() {
      return i18n('claim.review.solDec.declaration2');
    },
    allowedValues: [true],
  },
  declaration3: {
    type: Boolean,
    label() {
      return i18n('claim.review.solDec.declaration3');
    },
    allowedValues: [true],
  },
});

export default claimReview;
