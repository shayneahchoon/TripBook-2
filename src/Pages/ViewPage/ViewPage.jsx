import React from "react";
import { useParams } from "react-router-dom";
import "./ViewPage.css";

const ViewPage = () => {
  const details = useParams();
  console.log(details)
  return (
    <section className="view_page">
      <h1>Itinerary for {}</h1>
    </section>
  );
};

export default ViewPage;
