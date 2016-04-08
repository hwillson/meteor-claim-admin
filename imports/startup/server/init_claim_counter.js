import { incrementCounter, setCounter } from 'meteor/osv:mongo-counter';

// If a claimId counter hasn't been created properly (usually after a
// meteor reset, create it starting at 100000.
const referenceId = incrementCounter('counters', 'claimId');
if (referenceId < 100000) {
  setCounter('counters', 'claimId', 100000);
}
