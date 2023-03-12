import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { flight: "LAX", timestamp: 1675420896000, type: 'departure', airport: "LAX" },
];

const FlightSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        add: (state, action) => {
            return [...state, action.payload]
        }
    }
});


export default FlightSlice.reducer;
