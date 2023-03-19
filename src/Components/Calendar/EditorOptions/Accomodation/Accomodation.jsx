import React from "react";
import { Form } from "react-router-dom";
import "./Accomodation.css";
import { string } from "prop-types";

const Accomodation = () => {
  return (
    <section>
      <h3>Accomodation details</h3>
      <Form method="get">
        <label htmlFor="address_line_1">Address Line</label>
        <input id="address_line_1" name="address_line_1" />
        <label htmlFor="post_code">Post Code</label>
        <input id="post_code" name="post_code" />
        <label htmlFor="check_in">Check In Date</label>
        <input id="check_in" name="check_in" type="date" required />
        <label htmlFor="check_out">Check Out Date</label>
        <input id="check_out" name="check_out" type="date" required />
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
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
