import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.users = action.payload;
    },
    removeUser : (state) => {
      state.users = null
    }
  },
});

export const { loadUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
