import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import "./Flight.css";
import { string } from "prop-types";

export const FLIGHT_TYPES = {
  DIRECT_DEPARTURE: "Direct Departure",
  DIRECT_ARRIVAL: "Direct Arrival",
  CONNECTING_ARRIVAL: "Connecting Arrival",
};

const HiddenInputs = () => {
  const { location, flight, date, time } = useLoaderData();
  return (
    <>
      {location &&
        location.map((value, index) => {
          return (
            <input key={index} type="hidden" name="location" value={value} />
          );
        })}
      {flight &&
        flight.map((value, index) => {
          return (
            <input key={index} type="hidden" name="flight" value={value} />
          );
        })}
      {date &&
        date.map((value, index) => {
          return <input key={index} type="hidden" name="date" value={value} />;
        })}
      {time &&
        time.map((value, index) => {
          return <input key={index} type="hidden" name="time" value={value} />;
        })}
    </>
  );
};

const Flight = ({ type = FLIGHT_TYPES.DIRECT_DEPARTURE }) => {
  return (
    <section>
      <h3>{type} details</h3>
      <Form method="get">
        <HiddenInputs />
        <label htmlFor="location">Airport</label>
        <input id="location" name="location" />
        <label htmlFor="flight">Flight</label>
        <input id="flight" name="flight" />
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" required />
        <label htmlFor="time">Time</label>
        <input id="time" name="time" type="time" required />
        <hr />
        <h3>Next Step</h3>
        <div className="next_options_grid">
          {type === FLIGHT_TYPES.DIRECT_DEPARTURE ? (
            <>
              <button formAction="/connecting_arrival">
                Add Connecting Arrival
              </button>
              <button formAction="/direct_arrival">Add Direct Arrival</button>
            </>
          ) : type === FLIGHT_TYPES.CONNECTING_ARRIVAL ? (
            <>
              <button formAction="/direct_departure">Add Next Departure</button>
            </>
          ) : (
            <>
              <button formAction="/flight_summary">
                View Summary and Save
              </button>
            </>
          )}
        </div>
      </Form>
    </section>
  );
};

Flight.propTypes = {
  type: string,
};

export default Flight;
