export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const BOOKED_IN = "check_in";
export const BOOKED_OUT = "check_out";
export const BOOKED_ACTIVE = "active";

const normalizeDate = (time) => {
  const date = new Date(time);
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);
  return date.getTime();
};

const getBookingStatus = (index, bookingsList, date) => {
  let bookingIndex = index;
  let bookingStatus = null;

  if (bookingIndex < bookingsList.length) {
    const booking = bookingsList[bookingIndex];
    const checkin = normalizeDate(booking.checkin);
    const checkout = normalizeDate(booking.checkout);
    const currTime = normalizeDate(date);
    if (checkin === currTime) {
      bookingStatus = BOOKED_IN;
    } else if (checkout === currTime) {
      bookingStatus = BOOKED_OUT;
      bookingIndex++;
    } else if (currTime > checkin && currTime < checkout) {
      bookingStatus = BOOKED_ACTIVE;
    }
  }

  return [bookingIndex, bookingStatus];
};

export const formatCalendarByWeek = (calendar) => {
  if (calendar.length <= 0) return calendar;

  const startDay = calendar[0].day;
  const endDay = calendar[calendar.length - 1].day;
  const startBuffer = [];
  const endBuffer = [];

  for (let i = 0; i < startDay; i++) {
    startBuffer.push({
      day: i,
      date: null,
      booked: null,
    });
  }

  for (let i = endDay + 1; i < days.length; i++) {
    endBuffer.push({
      day: i,
      date: null,
      booked: null,
    });
  }

  const fullFormattedCalendar = [...startBuffer, ...calendar, ...endBuffer];
  const formattedByWeek = [];

  for (let i = 0; i < fullFormattedCalendar.length; i += days.length) {
    const week = fullFormattedCalendar.slice(i, i + days.length);
    formattedByWeek.push(week);
  }

  return formattedByWeek;
};

export const makeCalendar = (startMonth, year, availBookings) => {
  let dateList = [];
  let currDay = 1;
  let currMonth = startMonth;
  let bookingIndex = 0;

  const date = new Date();
  date.setFullYear(year);
  date.setMonth(currMonth);
  date.setDate(currDay);

  while (currMonth <= startMonth) {
    let bookingStatus = null;
    [bookingIndex, bookingStatus] = getBookingStatus(
      bookingIndex,
      availBookings,
      date
    );

    dateList.push({
      day: date.getDay(),
      date: date.getDate(),
      booked: bookingStatus,
    });

    date.setDate(++currDay);
    currMonth = date.getMonth();
  }

  return dateList;
};
