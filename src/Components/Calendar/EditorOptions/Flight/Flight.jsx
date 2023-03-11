import React from "react";
import { Link } from "react-router-dom";
import "./Flight.css";
import { string } from "prop-types";

export const FLIGHT_TYPES = {
  DIRECT_DEPARTURE: "Direct Departure",
  CONNECTING_DEPARTURE: "Connecting Departure",
  DIRECT_ARRIVAL: "Direct Arrival",
  CONNECTING_ARRIVAL: "Connecting Arrival",
};

const Flight = ({type = FLIGHT_TYPES.DIRECT_DEPARTURE}) => {
  return (
    <section>
      <h3>{type} details</h3>
      <form>
        <label htmlFor="departure_location">Airport</label>
        <input id="departure_location" />
        <label htmlFor="departure_flight">Flight</label>
        <input id="departure_flight" />
        <label htmlFor="departure_date">Date</label>
        <input id="departure_date" placeholder="DD/MM/YYYY" />
        <label htmlFor="departure_time">Time</label>
        <input id="departure_location" placeholder="HH:MM" />
      </form>
      <hr/>
      <h3>Add Arrival</h3>
      <div className="next_options_grid">
        <Link to="/Flight">Connecting</Link>
        <Link to="/">Direct</Link>
      </div>
    </section>
  );
};

Flight.propTypes = {
  type: string,
};

export default Flight;
