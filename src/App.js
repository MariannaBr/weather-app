import TempCheck from "./features/Components/TempCheck";
import DayCard from "./features/Components/DayCard";
import Arrow from "./features/Components/Arrow";
import Graph from "./features/Components/Graph";
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

  if (loading) {
    return (
      <div>
        <TempCheck />
      </div>
    );
  } else {
    const days = findMeasurementsOfDay(weatherData);

    console.log("days", days);

    const getTimeAndTemp = (data) => {
      let times = [];
      let values = [];
      let GraphData = { measurementTimes: times, measuredTemperatures: values };
      for (var i = 0; i < data.length; i++) {
        times.push(data[i].time);
        values.push(data[i].main.temp);
      }
      return GraphData;
    };

    const graphData = getTimeAndTemp(days[0])

    const handleChange = (event) => {
      setTempType(event.target.value);
    };

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
        <Graph data={graphData} />
      </div>
    );
  }
}

export default App;
