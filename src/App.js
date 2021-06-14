import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import TempCheck from "./features/Components/TempCheck";
import DayCard from "./features/Components/DayCard";
import Arrow from "./features/Components/Arrow";
import Grid from "@material-ui/core/Grid";
import "./App.css";

function App() {
  let loading = true;
  let data = {};
  let days_visible = [0, 1, 2];

  const [weatherData, SetWeatherData] = useState({});

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${process.env.WEATHER_API_KEY}&cnt=40`,
      { method: "GET" }
    )
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error();
      })
      .then((res) => {
        SetWeatherData(res);
      });

    //console.log(weatherData.city.name)
  }, [weatherData]);

  const city = weatherData.city;

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
      <TempCheck />
      <Grid container direction="row" justify="space-around">
        <Arrow left={true} />
        <Arrow left={false} />
      </Grid>
      <Grid container direction="row" justify="space-evenly">
        {days_visible.map((day) => (
          <Grid key={day} item>
            <DayCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
