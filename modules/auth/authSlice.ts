import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  loginValues:{}
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoading: (state, action) => {
      state.loading = action.payload;
    },
    login: (state,action) => {
      state.isAuthenticated = true;
      state.loginValues = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.loginValues = {};

    },
  },
});

export const { toggleLoading, login, logout } = authSlice.actions;

export default authSlice.reducer;
