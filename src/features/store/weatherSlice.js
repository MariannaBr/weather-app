import { createSlice } from "@reduxjs/toolkit";
require('dotenv').config()

const initialState = {
  isLoading: true,
  data: {},
  dayData: {},
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    dataLoading(state, action) {
      state.isLoading = true;
    },
    dataLoaded(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { dataLoading, dataLoaded } = weatherSlice.actions;

export default weatherSlice.reducer;

// Thunk function for async fetching of data
export const fetchData = () => async (dispatch) => {
  dispatch(dataLoading());
  let data
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&cnt=40`,
    { method: "GET" })
  data = await response.json()
  if (response.ok) {
    dispatch(dataLoaded(data))
  } else {
    throw new Error(response.statusText)
  }
};

export const selectWeather = (state) => state.weather.data
