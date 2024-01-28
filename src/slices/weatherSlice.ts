import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { Weather } from "@/interface/Weather";

import fetchCurrentWeather from "@/api/fetchCurrentWeather";
import { Coordinates } from "@/interface/Coordinates";

type WeatherState = {
  weather: Weather[];
  loading: boolean;
};

const initialState: WeatherState = {
  weather: [],
  loading: false,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetch",
  async (coordinate: Coordinates): Promise<Weather> => {
    const data = await fetchCurrentWeather(coordinate);

    return data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchWeather.fulfilled,
        (state, action: PayloadAction<Weather>) => {
          state.weather.push(action.payload);
        }
      );
  },
});

export const weatherReducer = weatherSlice.reducer;
