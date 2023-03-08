export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const normalizeDate = (time) => {
  const date = new Date(time);
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);
  return date.getTime();
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
    if (bookingIndex < availBookings.length) {
      const booking = availBookings[bookingIndex];
      const checkin = normalizeDate(booking.checkin);
      const checkout = normalizeDate(booking.checkout);
      const currTime = normalizeDate(date);

      if (checkin === currTime) {
        bookingStatus = "IN";
      } else if (checkout === currTime) {
        bookingStatus = "OUT";
        bookingIndex++;
      } else if (currTime > checkin && currTime < checkout) {
        bookingStatus = "ACTIVE";
      }
    }

    dateList.push({
      day: days[date.getDay()],
      date: date.getDate(),
      booked: bookingStatus,
    });

    date.setDate(++currDay);
    currMonth = date.getMonth();
  }

  return dateList;
};
