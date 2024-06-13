import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  
  user: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setAuth: (state, action) => {
    //   state.user = action.payload;
    // },
    setuser: (state, action) => {
      state.user = action.payload;
    },
    clearuser: (state) => {
      state.user = null;
    },
  },
});

export const { /*setAuth*/ setuser , clearuser} = authSlice.actions;

export default authSlice.reducer;
