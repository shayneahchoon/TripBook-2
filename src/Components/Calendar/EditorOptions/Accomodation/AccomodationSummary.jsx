import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Accomodation.css";
import { Form } from "react-router-dom";

const FlightSummary = () => {
  const { address1, postCode, title, checkIn, checkOut } = useLoaderData();

  return (
    <section>
      <h3>Your summary</h3>
      <Form>
        <input type="hidden" name="address_line_1" value={address1} />
        <input type="hidden" name="post_code" value={postCode} />
        <input type="hidden" name="title" value={title} />
        <input type="hidden" name="check_in" value={checkIn} />
        <input type="hidden" name="check_out" value={checkOut} />
        <p className="summary_paragraph">
          <span>Address Line:</span>
          <span>{address1}</span>
          <span>Post Code:</span>
          <span>{postCode}</span>
          <span>Check In:</span>
          <span>{checkIn}</span>
          <span>Check Out:</span>
          <span>{checkOut}</span>
          <span>Title:</span>
          <span>{title}</span>
        </p>
        <hr />
        <h3>Next Step</h3>
        <div className="next_options_grid_save">
          <button formAction="/save_accomodation">Save</button>
          <button formAction="/add_accomodation">Restart</button>
        </div>
      </Form>
    </section>
  );
};

export default FlightSummary;
