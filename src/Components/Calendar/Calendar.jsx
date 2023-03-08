import React from "react";
import "./Calendar.css";
import { useSelector } from "react-redux";
import { shape, arrayOf, string, number } from "prop-types";
import {
  formatCalendarByWeek,
  makeCalendar,
  BOOKED_IN,
  BOOKED_OUT,
  BOOKED_ACTIVE,
} from "./utils/makeCalendar";

const setDataCellClass = (status) => {
  if (status === BOOKED_IN) return "check_in";
  if (status === BOOKED_OUT) return "check_out";
  if (status === BOOKED_ACTIVE) return "active";
  return "in_active";
};

const printDay = (date) => {
  if (date === null) return "";
  return `${date}`;
};

const Week = ({ days }) => {
  return (
    <tr>
      {days.map(({ date, booked }, index) => {
        return (
          <td key={index} className={setDataCellClass(booked)}>
            <div>
              <span className="day">{printDay(date)}</span>
              <span className="status">{booked ? booked : "Add?"}</span>
            </div>
          </td>
        );
      })}
    </tr>
  );
};

export const Calendar = () => {
  const data = useSelector((state) => state.accommodation);
  const calendar = makeCalendar(2, 2023, data);
  const formattedCalendar = formatCalendarByWeek(calendar);
  return (
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

export default Calendar;
