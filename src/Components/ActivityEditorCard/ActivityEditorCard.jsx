import React from "react";
import PropTypes from "prop-types";
import './ActivityEditorCard.css'

const ActivityEditorCard = ({data}) => {
    return (
      <li className="activity_editor_card">
        <h2>
          {data.title} approx. {data.durationMs}
        </h2>
        <p>{data.description}</p>
        <div className="activity_editor_options">
          <button>Delete</button>
          <button>Modify</button>
          <button>Move Down</button>
          <button>Move Up</button>
        </div>
      </li>
    );
}

ActivityEditorCard.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        title: PropTypes.string,
        durationMs: PropTypes.number,
        description: PropTypes.string,
      }),
}

export default ActivityEditorCard;