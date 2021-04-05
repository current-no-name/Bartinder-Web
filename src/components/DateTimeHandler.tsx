import {
  DateHandler,
  TimeHandler,
  WeekDayFactory
} from 'function/DateTimeHandler';
import React from 'react';

function DateTimeHandler() {
  const now = new Date();
  const weekDay = WeekDayFactory(now);
  const date = DateHandler(now);
  const time = TimeHandler(now);
  return (
    <div className="w-full flex space-y-6 flex-wrap">
      <p className="text-primary text-9xl w-full">{weekDay}</p>
      <p className="text-secondary text-9xl w-full">{date}</p>
      <div className="w-full flex justify-between items-center">
        <p className="text-primary text-9xl">{time}</p>
        <div className="bg-primary w-48 h-28"></div>
      </div>
    </div>
  );
}

export default DateTimeHandler;
