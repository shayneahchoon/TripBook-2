import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: {
    flight: "LAX",
    timestamp: 1675420896000,
    type: "departure",
    airport: "LAX",
  },
};

const makeKey = (payload) => {
  return `${payload.flight}${payload.timestamp}${payload.type}${payload.airport}`;
};

const FlightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, [makeKey(action.payload)]: action.payload };
    },
    addMulti: (state, action) => {
      let toAdd = {};
      for (let i = 0; i < action.payload.length; i++) {
        const flight = action.payload[i];
        toAdd[makeKey(flight)] = flight;
      }
      return { ...state, ...toAdd };
    },
  },
});

export const { add, addMulti } = FlightSlice.actions;
export const FLIGHT_ARRIVAL = "arrival";
export const FLIGHT_DEPARTURE = "departure";
export default FlightSlice.reducer;
