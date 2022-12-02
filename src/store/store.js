import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./email.slice";

export const store = configureStore({
  reducer: { email: emailReducer },
});
