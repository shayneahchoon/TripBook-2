import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Flight.css";
import propTypes from "prop-types";
import { Form } from "react-router-dom";
import {
  FLIGHT_ARRIVAL,
  FLIGHT_DEPARTURE,
} from "../../../../redux/reducers/Flights";

const Summary = ({ date, time, flight, location, type }) => {
  const timestamp = `${date}T${time}`;
  const dateObj = new Date(timestamp);

  return (
    <li>
      <span className="summary_location">
        {location.toUpperCase().slice(0, 3)}
      </span>
      <span className="summary_time">
        <span>
          {time} / {date}
        </span>
        <span>{flight}</span>
        <span>{type}</span>
      </span>
      <input type="hidden" name="time_epoch" value={dateObj.getTime()} />
      <input type="hidden" name="flight" value={flight} />
      <input type="hidden" name="location" value={location} />
      <input type="hidden" name="type" value={type} />
    </li>
  );
};

const FlightSummary = () => {
  const { date, flight, location, time } = useLoaderData();

  let flightSummaries = [];

  for (let i = 0; i < date.length; i++) {
    flightSummaries.push(
      <Summary
        key={i}
        date={date[i]}
        flight={flight[i]}
        location={location[i]}
        time={time[i]}
        type={i % 2 == 0 ? FLIGHT_DEPARTURE : FLIGHT_ARRIVAL}
      />
    );
  }

  return (
    <section>
      <h3>Your summary</h3>
      <Form>
        <ol className="summary_list">{flightSummaries}</ol>

        <hr />
        <h3>Next Step</h3>
        <div className="next_options_grid_save">
          <button formAction="/save_flight">Save</button>
          <button formAction="/direct_departure">Restart</button>
        </div>
      </Form>
    </section>
  );
};

Summary.propTypes = {
  date: propTypes.string,
  time: propTypes.string,
  flight: propTypes.string,
  location: propTypes.string,
  type: propTypes.string,
};

export default FlightSummary;
