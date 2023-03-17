import React from "react";
import "./HomePage.css";
import Calendar from "@components/Calendar/Calendar";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <section className="homepage">
      {" "}
      <Calendar />
      <h2>Add an Event</h2>
      <Outlet />
    </section>
  );
};

export default HomePage;
