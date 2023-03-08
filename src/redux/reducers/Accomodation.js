import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "acc1",
    checkin: 1675420896000,
    checkout: 1677840096000,
  },
  {
    name: "acc2",
    checkin: 1678185696000,
    checkout: 1678272096000,
  },
  {
    name: "acc3",
    checkin: 1679308896000,
    checkout: 1679654496000,
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
