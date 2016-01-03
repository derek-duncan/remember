import moment from 'moment';

export function getCurrentTimestamp() {

  let now = moment(new Date()).format('YYYYMMDD');
  return now;
}

export function getFormattedDate(timestamp) {

  let date = moment(timestamp, 'YYYYMMDD').format('D MMMM, YYYY');
  return date;
}
