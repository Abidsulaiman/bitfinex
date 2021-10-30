import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tradePair: null,
  volume: null,
  priceChange: null,
  low: null,
  high: null,
};

export const tickerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = tickerSlice.actions;

export default tickerSlice.reducer;
