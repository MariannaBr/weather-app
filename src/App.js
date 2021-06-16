import TempCheck from "./features/Components/TempCheck";
import DayCard from "./features/Components/DayCard";
import Arrow from "./features/Components/Arrow";
import { Grid, DataGrid } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectWeather } from "./features/store/weatherSlice";
import { findMeasurementsOfDay } from "./features/helper functions/dayData";
import "./App.css";

function App() {
  const [tempType, setTempType] = useState("Fahrenheit");
  const weatherData = useSelector(selectWeather);
  const loading = useSelector((state) => state.weather.isLoading);

  const days = findMeasurementsOfDay(weatherData);

  const handleChange = (event) => {
    setTempType(event.target.value);
  };

  if (loading) {
    return (
      <div>
        <TempCheck />
      </div>
    );
  } else {
    return (
      <div className="App">
        <TempCheck value={tempType} handleChange={handleChange} />
        <Grid container direction="row" justify="space-around">
          <Arrow left={true} />
          <Arrow left={false} />
        </Grid>
        <Grid container direction="row" justify="space-evenly">
          {days.map((day) => (
            <Grid key={day[0].dayId} item>
              <DayCard dayData={day} tempType={tempType} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
