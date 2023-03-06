import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "acc1",
    checkin: 1678640640000,
    checkout: 1678640640000,
  },
  {
    name: "acc2",
    checkin: 1678640640000,
    checkout: 1679072640000,
  },
];

const AccomodationSlice = createSlice({
  name: "accomodation",
  initialState,
  reducers: {
    delete: (state, action) => {
      const newState = state.map((data) => data != action.name);
      state = [...newState];
    },
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default AccomodationSlice.reducer;
