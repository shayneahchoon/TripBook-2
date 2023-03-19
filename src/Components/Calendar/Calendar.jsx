import React, { useState } from "react";
import "./Calendar.css";
import { useSelector } from "react-redux";
import {
  formatCalendarByWeek,
  makeCalendar,
  monthList,
} from "./utils/makeCalendar";
import { getAccomodations, getFlights } from "../../redux/utils";
import Week from "./Week";

export const Calendar = () => {
  const accomodations = useSelector((state) => state.accommodation);
  const flights = useSelector((state) => state.flights);
  let [month, setMonth] = useState(2);
  const accomodationList = getAccomodations(accomodations);
  const flightsList = getFlights(flights);

  const calendar = makeCalendar(month, 2023, accomodationList, flightsList);
  const formattedCalendar = formatCalendarByWeek(calendar);

  console.log(accomodationList)
  return (
    <>
      <div className="calendar_controls">
        <h1>{monthList[month]}</h1>
        <button onClick={() => setMonth(month - 1)}>Prev</button>
        <button onClick={() => setMonth(month + 1)}>Next</button>
      </div>
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
