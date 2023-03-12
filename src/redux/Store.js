import { configureStore } from "@reduxjs/toolkit";
import accommodationReducer from "./reducers/Accomodation";
import flightReducer from "./reducers/Flights";

const store = configureStore({
  reducer: {
    accommodation: accommodationReducer,
    flight: flightReducer
  },
});

export default store;
