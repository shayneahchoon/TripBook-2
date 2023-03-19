import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test_1: {
    name: "acc1",
    checkin: 1675420896000,
    checkout: 1677840096000,
    address: "",
    postcode: "",
  },
  test_2: {
    name: "acc2",
    checkin: 1678185696000,
    checkout: 1678272096000,
  },
  test_3: {
    name: "acc3",
    checkin: 1679308896000,
    checkout: 1679654496000,
  },
};

const makeKey = (payload) => {
  return `${payload.title}${payload.checkIn}${payload.checkOut}${payload.address1}${payload.postCode}`;
};

const AccomodationSlice = createSlice({
  name: "accomodation",
  initialState,
  reducers: {
    delete: (state, action) => {
      const newState = state.map((data) => data != action.name);
      state = [...newState];
    },
    add: (state, action) => {
      const addition = {
        [makeKey(action.payload)]: {
          name: action.payload.title,
          checkin: action.payload.checkIn,
          checkout: action.payload.checkOut,
          address: action.payload.address1,
          postcode: action.payload.postCode,
        },
      };
      return { ...state, ...addition };
    },
  },
});

export const { add } = AccomodationSlice.actions;
export default AccomodationSlice.reducer;
