import React from "react";
import "./Calendar.css";
import { shape, arrayOf, string, number } from "prop-types";
import { BOOKED_IN, BOOKED_OUT, BOOKED_ACTIVE } from "./utils/makeCalendar";

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

const printStatus = (status) => {
  if (status === BOOKED_IN) return "CHECK \n IN";
  if (status === BOOKED_OUT) return "CHECK \n OUT";
  if (status === BOOKED_ACTIVE) return "-";
};

const Week = ({ days }) => {
  return (
    <tr>
      {days.map(({ date, booked }, index) => {
        return (
          <td key={index} className={setDataCellClass(booked, date)}>
            <div>
              <span className="day">{printDay(date)}</span>
              <span className="status">
                {booked ? printStatus(booked) : ""}
              </span>
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
