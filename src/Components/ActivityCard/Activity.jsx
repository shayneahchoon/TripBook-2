import React from "react";
import PropTypes from "prop-types";
import './Activity.css';

const Activity = ({ data }) => {
  return (
    <li className="activity_card">
      <h2>
        {data.title} approx. {data.durationMs}
      </h2>
      <p>{data.description}</p>
    </li>
  );
};

Activity.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string,
    durationMs: PropTypes.number,
    description: PropTypes.string,
  }),
};

export default Activity;
