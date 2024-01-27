import { configureStore } from "@reduxjs/toolkit";

import { weatherReducer } from "@/slices/weatherSlice";

export const store = configureStore({
  reducer: {
    weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
