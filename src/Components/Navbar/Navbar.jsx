import React from "react";
import './Navbar.css'
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/edit"> Edit </Link>
        <Link to="/timeline"> TimeLine </Link>
        <Link to="/"> Home</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
