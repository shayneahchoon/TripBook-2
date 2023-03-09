import React from "react";
import "./Calendar.css";
import { useSelector } from "react-redux";
import { formatCalendarByWeek, makeCalendar } from "./utils/makeCalendar";
import Week from "./Week";

export const Calendar = () => {
  const data = useSelector((state) => state.accommodation);
  const calendar = makeCalendar(2, 2023, data);
  const formattedCalendar = formatCalendarByWeek(calendar);

  return (
    <>
      <table cellSpacing="0rem" className="calendar_table">
        <thead>
          <tr>
            <th scope="col" colSpan="1">
              SUN
            </th>
            <th scope="col" colSpan="1">
              MON
            </th>
            <th scope="col" colSpan="1">
              TUE
            </th>
            <th scope="col" colSpan="1">
              WED
            </th>
            <th scope="col" colSpan="1">
              THU
            </th>
            <th scope="col" colSpan="1">
              FRI
            </th>
            <th scope="col" colSpan="1">
              SAT
            </th>
          </tr>
        </thead>
        <tbody>
          {formattedCalendar.map((week, index) => (
            <Week days={week} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Calendar;
