import React from "react";
import PropTypes from "prop-types";
import './HomePage.css'
import Calendar from "@components/Calendar/Calendar";
const HomePage = ({username}) => {
    return (
        <section className="homepage">
            <h1>Welcome {username}</h1>
            <div>Now</div>
            <div>Flights</div>
            <Calendar/>
            <div>Time</div>
        </section>
    )
}

HomePage.propTypes= {
    username: PropTypes.string,
}

export default HomePage;