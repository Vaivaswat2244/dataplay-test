import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import generalreducer from "./redux/genaralSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loginStatemodal: generalreducer,
  },
});
