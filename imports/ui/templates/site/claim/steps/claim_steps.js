import { Template } from 'meteor/templating';

import './claim_steps.html';

Template.siteClaimSteps.helpers({

  stepClass(id) {
    const activeStep = this.wizard.activeStep();
    const step = this.wizard.getStep(id);
    if (activeStep && activeStep.id === id) {
      return 'active';
    }
    if (step.data()) {
      return 'completed';
    }
    return 'disabled';
  },

});
