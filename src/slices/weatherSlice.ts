import { createSlice } from "@reduxjs/toolkit";

import { Weather, WeatherDetails } from "@/interface/Weather";

const initialState: Weather = {
  id: 0,
  name: "",
  main: {} as WeatherDetails,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
});

export const weatherReducer = weatherSlice.reducer;
