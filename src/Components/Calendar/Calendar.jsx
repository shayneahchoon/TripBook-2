import React from "react";
import "./Calendar.css";
import { useSelector } from "react-redux";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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

const getActiveDays = (data, startMonth) => {
  const date = new Date();
  date.setMonth(month);
  date.setDate(1);
  
  let currMonth = date.getMonth();
  while(currMonth <= startMonth){

  }
}

export const Calendar = () => {
  const date = new Date();
  const data = useSelector((state) => state.accommodation);
  const activeDays = getActiveDays(data, date.getMonth());

  console.log(activeDays);
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
