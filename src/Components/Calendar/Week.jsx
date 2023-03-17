import React from "react";
import "./Calendar.css";
import { shape, arrayOf, string, number } from "prop-types";
import { BOOKED_IN, BOOKED_OUT, BOOKED_ACTIVE } from "./utils/makeCalendar";
import { FLIGHT_ARRIVAL, FLIGHT_DEPARTURE } from "../../redux/reducers/Flights";

const setDataCellClass = (status, date) => {
  if (status === BOOKED_IN) return "check_in";
  if (status === BOOKED_OUT) return "check_out";
  if (status === BOOKED_ACTIVE) return "active";
  if (date === null) return "out_of_month";
  return "in_active";
};

const printDay = (date) => {
  if (date === null) return "";
  return `${date}`;
};

const printStatus = (status, flights) => {
  let printString = "";

  if (status === BOOKED_IN) printString += "🔑";
  if (status === BOOKED_OUT) printString += "🔒";
  if (status === BOOKED_ACTIVE) printString += "-";

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].type === FLIGHT_DEPARTURE) printString += "🛫";
    if (flights[i].type === FLIGHT_ARRIVAL) printString += "🛬";
  }

  return printString;
};

const Week = ({ days }) => {
  return (
    <tr>
      {days.map(({ date, booked, flights }, index) => {
        return (
          <td key={index} className={setDataCellClass(booked, date)}>
            <div>
              <span className="day">{printDay(date)}</span>
              <span className="status">{printStatus(booked, flights)}</span>
            </div>
          </td>
        );
      })}
    </tr>
  );
};

Week.propTypes = {
  days: arrayOf(
    shape({
      day: number,
      date: number,
      booked: string,
    })
  ),
};

export default Week;
