import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, KeyboardIcon } from '../../../../assets/icons';
import './DatePicker.css';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const DatePicker = ({ listing }) => {
  const checkIn = new Date(listing.checkIn);
  const checkOut = new Date(listing.checkOut);
  const nights = listing.price.nights;

  const [baseMonth, setBaseMonth] = useState(checkIn.getMonth());
  const [baseYear, setBaseYear] = useState(checkIn.getFullYear());

  const nextMonth = baseMonth === 11 ? 0 : baseMonth + 1;
  const nextYear = baseMonth === 11 ? baseYear + 1 : baseYear;

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const isInRange = (year, month, day) => {
    const date = new Date(year, month, day);
    return date >= checkIn && date <= checkOut;
  };

  const isCheckIn = (year, month, day) => {
    const date = new Date(year, month, day);
    return date.toDateString() === checkIn.toDateString();
  };

  const isCheckOut = (year, month, day) => {
    const date = new Date(year, month, day);
    return date.toDateString() === checkOut.toDateString();
  };

  const isToday = (year, month, day) => {
    const date = new Date(year, month, day);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const renderCalendarMonth = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="datepicker__cell datepicker__cell--empty" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const inRange = isInRange(year, month, day);
      const isStart = isCheckIn(year, month, day);
      const isEnd = isCheckOut(year, month, day);
      const today = isToday(year, month, day);

      cells.push(
        <div
          key={day}
          className={`datepicker__cell ${inRange ? 'datepicker__cell--in-range' : ''} ${isStart ? 'datepicker__cell--start' : ''} ${isEnd ? 'datepicker__cell--end' : ''} ${today ? 'datepicker__cell--today' : ''}`}
        >
          {day}
        </div>
      );
    }

    return cells;
  };

  const formatDate = (date) => `${date.getDate()} ${MONTHS[date.getMonth()].substring(0, 3)} ${date.getFullYear()}`;

  return (
    <div className="datepicker">
      <h2 className="datepicker__title">{nights} nights in {listing.location.city}</h2>
      <p className="datepicker__range">{formatDate(checkIn)} - {formatDate(checkOut)}</p>

      <div className="datepicker__calendars">
        <button className="datepicker__nav datepicker__nav--prev" onClick={() => { if (baseMonth === 0) { setBaseMonth(11); setBaseYear(baseYear - 1); } else { setBaseMonth(baseMonth - 1); } }} type="button" aria-label="Previous month">
          <ChevronLeftIcon size={12} />
        </button>

        <div className="datepicker__month">
          <h3 className="datepicker__month-title">{MONTHS[baseMonth]} {baseYear}</h3>
          <div className="datepicker__days-header">
            {DAYS.map((day, i) => <div key={i} className="datepicker__day-label">{day}</div>)}
          </div>
          <div className="datepicker__grid">{renderCalendarMonth(baseYear, baseMonth)}</div>
        </div>

        <div className="datepicker__month">
          <h3 className="datepicker__month-title">{MONTHS[nextMonth]} {nextYear}</h3>
          <div className="datepicker__days-header">
            {DAYS.map((day, i) => <div key={i} className="datepicker__day-label">{day}</div>)}
          </div>
          <div className="datepicker__grid">{renderCalendarMonth(nextYear, nextMonth)}</div>
        </div>

        <button className="datepicker__nav datepicker__nav--next" onClick={() => { if (baseMonth === 11) { setBaseMonth(0); setBaseYear(baseYear + 1); } else { setBaseMonth(baseMonth + 1); } }} type="button" aria-label="Next month">
          <ChevronRightIcon size={12} />
        </button>
      </div>

      <div className="datepicker__footer">
        <button className="datepicker__keyboard" type="button" aria-label="Keyboard shortcuts">
          <KeyboardIcon size={20} />
        </button>
        <button type="button" className="datepicker__clear" onClick={(e) => e.preventDefault()}>Clear dates</button>
      </div>
    </div>
  );
};

export default DatePicker;
