import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", // of the peice of state
  initialState: {
    user: null,
  },

  // action to interact with global store
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectuser = (state) => state.user.user;

export default userSlice.reducer;
