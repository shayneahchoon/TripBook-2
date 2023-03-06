import { configureStore } from "@reduxjs/toolkit";
import accommodationReducer from "./reducers/Accomodation";

const store = configureStore({
  reducer: {
    accommodation: accommodationReducer,
  },
});

export default store;
