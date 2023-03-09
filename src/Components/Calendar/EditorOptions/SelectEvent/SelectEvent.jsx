import React from "react";
import { Link } from "react-router-dom";
import "./SelectEvent.css";

const SelectEvent = () => {
  return (
    <>
      <h3>Select your event type:</h3>
      <Link to="/accomodation">Accomodation</Link>
      <Link to="/flight">Flight</Link>
      <Link to="/car">Car</Link>
    </>
  );
};

export default SelectEvent;
