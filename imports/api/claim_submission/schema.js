import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import claimSchema from '../claims/schema.js';
import purchaseSchema from '../purchases/schema.js';

const claimSubmissionSchema = new SimpleSchema([
  claimSchema,
  purchaseSchema,
]);

export default claimSubmissionSchema;
