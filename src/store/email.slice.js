import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATE = {
  composeIsOpen: false,
};

const emailSlice = createSlice({
  name: "email",
  initialState: INITIALSTATE,
  reducers: {
    composeOpen(state) {
      state.composeIsOpen = true;
    },
    composeClose(state) {
      state.composeIsOpen = false;
    },
  },
});

export const { composeOpen, composeClose } = emailSlice.actions; // adding action
export const composeBoxState = (state) => state.email.composeIsOpen; // adding state
export default emailSlice.reducer;
