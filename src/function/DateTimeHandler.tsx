const WeekdayEng = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const MonthEng = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
export function TimeHandler(date: Date) {
  return (
    (date.getHours() % 12) +
    ':' +
    (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) +
    ' ' +
    (date.getHours() >= 12 ? 'PM' : 'AM')
  );
}

export function DateHandler(date: Date) {
  return (
    MonthFactory(date) + ' ' + DateFactory(date) + ' ' + date.getFullYear()
  );
}
function DateFactory(date: Date) {
  const temp = date.getDate();
  const tempList = temp.toString().split('');
  const listLength = tempList[tempList.length - 1];

  if (listLength === '1' && temp !== 11) {
    return temp.toString() + 'st';
  } else if (listLength === '2' && temp !== 12) {
    return temp.toString() + 'nd';
  } else if (listLength === '3' && temp !== 13) {
    return temp.toString() + 'rd';
  } else {
    return temp.toString() + 'th';
  }
}

function MonthFactory(date: Date) {
  const temp = date.getMonth();
  return MonthEng[temp];
}

export function WeekDayFactory(date: Date) {
  const temp = date.getDay();
  return WeekdayEng[temp];
}
