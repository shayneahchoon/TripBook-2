import React from "react";
import { Link } from "react-router-dom";
import "./SelectEvent.css";

const SelectEvent = () => {
  return (
    <section>
      <h3>Select your event type:</h3>
      <div className="select_event_container">
        <Link to="/accomodation">Accomodation</Link>
        <Link to="/flight">Flight</Link>
        <Link to="/car">Car</Link>
      </div>
    </section>
  );
};

export default SelectEvent;
