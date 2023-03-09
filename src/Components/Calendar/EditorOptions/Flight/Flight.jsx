import React from "react";
import { Link } from "react-router-dom";
import "./Flight.css";

const Flight = () => {
  return (
    <>
      <h3>Where is your departure:</h3>
      <Link to="/accomodation">Accomodation</Link>
      <Link to="/flight">Flight</Link>
    </>
  );
};

export default Flight;
