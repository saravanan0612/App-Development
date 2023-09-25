import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: localStorage.getItem("email") || null,
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { email: action.payload };
      localStorage.setItem("email", action.payload);
    },
    logout: (state) => {
      state.user = { email: null };
      localStorage.removeItem("email");
    },
  },
});

export const { login, logout } = UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice;
