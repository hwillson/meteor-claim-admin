import { Meteor } from 'meteor/meteor';
import log from 'loglevel';

log.setLevel(Meteor.settings.public.logLevel);

export default log;
