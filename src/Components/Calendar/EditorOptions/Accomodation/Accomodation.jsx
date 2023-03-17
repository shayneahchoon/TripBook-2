import React from "react";
import { Form } from "react-router-dom";
import "./Accomodation.css";
import { string } from "prop-types";

const Accomodation = () => {
  return (
    <section>
      <h3>Accomodation details</h3>
      <Form method="get">
        <label htmlFor="address_line_1">Address Line 1</label>
        <input id="address_line_1" name="address_line_1" />
        <label htmlFor="address_line_2">Address Line 2</label>
        <input id="address_line_2" name="address_line_2" />
        <label htmlFor="post_code">Post Code</label>
        <input id="post_code" name="post_code" />
        <label htmlFor="date">Date</label>
        <input id="date" name="date" type="date" required />
        <hr />
        <h3>Next Step</h3>
        <div className="next_options_grid">
          <button formAction="/accomodation_summary">
            View Summary and Save
          </button>
        </div>
      </Form>
    </section>
  );
};

Accomodation.propTypes = {
  type: string,
};

export default Accomodation;
