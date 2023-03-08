import React from "react";
import "./Calendar.css";
import { useSelector } from "react-redux";
import { days, makeCalendar } from "./utils/makeCalendar";

const Week = () => {
  return (
    <tr>
      {days.map((day, index) => {
        return (
          <td id={day} key={index}>
            {" "}
            {day.slice(0, 3)} Booked!
          </td>
        );
      })}
    </tr>
  );
};

export const Calendar = () => {
  const data = useSelector((state) => state.accommodation);
  const calendar = makeCalendar(2, 2023, data);
  console.log(calendar);
  return (
    <table cellSpacing="0rem" className="calendar_table">
      <tbody>
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
      </tbody>
    </table>
  );
};

export default Calendar;
