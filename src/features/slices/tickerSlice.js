import { createSlice } from "@reduxjs/toolkit";
import { PUBLIC_CHANNEL } from "../../config";

const initialState = {
  value: null,
  status: false,
};

const ws = new WebSocket(PUBLIC_CHANNEL);

export const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    storeData: (state, action) => {
      state.value = action.payload;
      state.status = true;
    },
    disconnectSocket: (state) => {
      ws.close();
      state.status = false;
    },
  },
});

export const { storeData, disconnectSocket } = tickerSlice.actions;

export default tickerSlice.reducer;
