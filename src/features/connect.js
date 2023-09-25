import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "connect",
  initialState: {
    isDisplayed: false,
    type: "SignUp",
  },
  reducers: {
    toggle: (state) => {
      state.type === "SignUp"
        ? (state.type = "SignIn")
        : (state.type = "SignUp");
    },
    hide: (state) => {
      state.isDisplayed = false;
    },
    show: (state) => {
      state.isDisplayed = true;
    },
  },
});

export const { toggle, hide, show } = actions;
export default reducer;
