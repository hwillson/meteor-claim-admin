import { moment } from 'meteor/momentjs:moment';

const dateUtility = {
  dateFormat: 'yyyy-mm-dd',
  momentDateFormat: 'YYYY-MM-DD',
  momentDateFormatWithTime: 'YYYY-MM-DD hh:mm:ss A',
  formatDate(aDate) {
    return moment(aDate).format(this.momentDateFormat);
  },
  formatDateWithTime(aDate) {
    return moment(aDate).format(this.momentDateFormatWithTime);
  },
};

export default dateUtility;
