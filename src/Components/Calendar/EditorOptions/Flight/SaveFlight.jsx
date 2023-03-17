import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import "./Flight.css";
import { addMulti } from "../../../../redux/reducers/Flights";

const SaveFlight = () => {
  const { times, flights, locations, types } = useLoaderData();
  const dispatcher = useDispatch();

  const additions = [];
  for (let i = 0; i < times.length; i++) {
    additions.push({
      flight: flights[i],
      timestamp: Number(times[i]),
      type: types[i],
      airport: locations[i],
    });
  }

  useEffect(() => {
    dispatcher(addMulti(additions));
  }, []);

  return (
    <section>
      <h3>Your details have been saved!</h3>
    </section>
  );
};

export default SaveFlight;
