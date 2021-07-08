import { createSlice } from "@reduxjs/toolkit";
import { convertKtoF, convertKtoC } from "../helper_functions/convertTemp";

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
    addDayId(state, action) {
      const { id, dayId } = action.payload;
      state.data.list[id].dayId = dayId;
    },
  },
});

export const { dataLoading, dataLoaded, addDayId } = weatherSlice.actions;

export default weatherSlice.reducer;

// takes the data from api and creates a list of only necessary data for our app
function preprocessData(data) {
  const city = data.city.name;
  const allMeasurements = [];

  for (var i=0; i<data.list.length; i++) {
    const dayId = data.list[i].dt_txt.split(" ")[0];
    const time = data.list[i].dt_txt.split(" ")[1];
    allMeasurements[i] = {
      dayId: dayId,
      time: time,
      city: city,
      tempF: convertKtoF(data.list[i].main.temp),
      tempC: convertKtoC(data.list[i].main.temp)
    }
  }
  return allMeasurements;
}

// Thunk function for async fetching of data
export const fetchData = () => async (dispatch) => {
  dispatch(dataLoading());
  let data;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`,
    { method: "GET" }
  );
  data = await response.json();
  if (response.ok) {
    dispatch(dataLoaded(preprocessData(data)));
  } else {
    throw new Error(response.statusText);
  }
};

export const selectWeather = (state) => state.weather.data;
