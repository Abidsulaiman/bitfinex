import { configureStore } from "@reduxjs/toolkit";
import tickerSlice from "../features/slices/tickerSlice";

export const store = configureStore({
  reducer: {
    ticker: tickerSlice,
  },
});
