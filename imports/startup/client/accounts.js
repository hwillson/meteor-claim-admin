import { accountsUIBootstrap3 } from 'meteor/ian:accounts-ui-bootstrap-3';
import { FlowRouter } from 'meteor/kadira:flow-router';

accountsUIBootstrap3.logoutCallback = () => {
  FlowRouter.go('adminWelcome');
};
