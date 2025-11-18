import moment from 'moment';

const date = moment().format("DD-MMM-YY");

console.log(date)


const tomorrowStr = moment().add(1, 'day').format('DD-MMM-YYYY');

console.log(tomorrowStr)

