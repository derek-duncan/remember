import moment from 'moment';

export function getCurrentTimestamp() {

  let now = moment(new Date()).format('YYYYMMDD');
  return now;
}
