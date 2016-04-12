import { FS } from 'meteor/cfs:base-package';
import { Security } from 'meteor/ongoworks:security';
import 'meteor/cfs:gridfs';

const siteFiles = new FS.Collection('site_files', {
  stores: [new FS.Store.GridFS('site_files')],
});

Security.permit([
  'insert',
  'update',
  'remove',
]).collections([
  siteFiles,
]).ifLoggedIn().apply();
Security.permit(['download']).collections([siteFiles]).apply();

export default siteFiles;
