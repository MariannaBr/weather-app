import { createSlice } from "@reduxjs/toolkit";
import { convertKtoF, convertKtoC } from "../helper_functions/convertTemp"

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
      const { id, dayId } = action.payload
      state.data.list[id].dayId = dayId
    }
  },
});

export const { dataLoading, dataLoaded, addDayId } = weatherSlice.actions;

export default weatherSlice.reducer;

function preprocessData(data) {

  let allMeasurements = data.list
  
  const dayId = allMeasurements[0].dt_txt.split(" ")[0]
  const time = allMeasurements[0].dt_txt.split(" ")[1]
  allMeasurements[0].dayId = dayId
  allMeasurements[0].time = time
  allMeasurements[0].main.tempF = convertKtoF(allMeasurements[0].main.temp)
  allMeasurements[0].main.tempC = convertKtoC(allMeasurements[0].main.temp)

  for ( var i=1; i<allMeasurements.length; i++ ) {
    const dayId = allMeasurements[i].dt_txt.split(" ")[0]
    const time = allMeasurements[i].dt_txt.split(" ")[1]
    allMeasurements[i].dayId = dayId
    allMeasurements[i].time = time
    allMeasurements[i].main.tempF = convertKtoF(allMeasurements[i].main.temp)
    allMeasurements[i].main.tempC = convertKtoC(allMeasurements[i].main.temp)
  }
  return allMeasurements
}

// Thunk function for async fetching of data
export const fetchData = () => async (dispatch) => {
  dispatch(dataLoading());
  let data
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`,
    { method: "GET" })
  data = await response.json()
  if (response.ok) {
    dispatch(dataLoaded(preprocessData(data)))
  } else {
    throw new Error(response.statusText)
  }
};

export const selectWeather = (state) => state.weather.data
