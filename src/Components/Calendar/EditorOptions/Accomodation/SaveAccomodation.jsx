import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import "./Accomodation.css";
import { add } from "../../../../redux/reducers/Accomodation";

const SaveAccomodation = () => {
  const { address1, postCode, title, checkIn, checkOut } = useLoaderData();
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(
      add({
        address1,
        postCode,
        title,
        checkIn: Number(new Date(checkIn).getTime()),
        checkOut: Number(new Date(checkOut).getTime()),
      })
    );
  }, []);

  return (
    <section>
      <h3>Your details have been saved!</h3>
    </section>
  );
};

export default SaveAccomodation;
