import { FS } from 'meteor/cfs:base-package';
import { Security } from 'meteor/ongoworks:security';
import 'meteor/cfs:gridfs';

const exportFiles = new FS.Collection('export_files', {
  stores: [new FS.Store.GridFS('export_files')],
});

Security.permit(['download']).collections([exportFiles]).apply();

export default exportFiles;
