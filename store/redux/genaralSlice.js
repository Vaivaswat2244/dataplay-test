import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModel: false,
  isProfile: false
};

export const generalSlice = createSlice({
  name: "loginStatemodal",
  initialState,
  reducers: {
    setLoginModel: (state, action) => {
      state.loginModel = action.payload;
    },
    handleIsProfile: (state, action) => {
      state.isProfile = action.payload
    }
  },
});

export const { setLoginModel, handleIsProfile } = generalSlice.actions;

export default  generalSlice.reducer;
