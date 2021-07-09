import { useState } from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import "./css/css_config.js";

import Arrow from "./features/Components/Arrow";
import DayCard from "./features/Components/DayCard";
import Graph from "./features/Components/Graph";
import TempCheck from "./features/Components/TempCheck";

import giveNiceDate from "./features/helper_functions/niceDate";
import findMeasurementsOfDay from "./features/helper_functions/dayData";

import { celcius, fahrenheit } from "./features/utils/constants";

import { selectWeather } from "./features/redux/weatherSlice";
import { App_style } from "./css/css_config";

function App() {
  const classes = App_style();
  const [tempType, setTempType] = useState(fahrenheit);
  const [arrowIndex, setArrowIndex] = useState(0);
  const [graphId, setGraphId] = useState("");
  const weatherData = useSelector(selectWeather);
  const loading = useSelector((state) => state.weather.isLoading);
  let rightInvisible = false;
  let leftInvisible = true;

  if (loading) {
    return (
      <div className={classes.body}>
        <div className={classes.loading}>Loading</div>
      </div>
    );
  } else {
    const days = findMeasurementsOfDay(weatherData);
    const daysToShow = days.slice(arrowIndex, arrowIndex + 3);
    const city = days[0][0].city;

    const getTimeAndTemp = (data) => {
      let times = [];
      let values = [];
      let title = giveNiceDate(data);
      let GraphData = {
        title: title,
        measurementTimes: times,
        measuredTemperatures: values,
      };
      for (var i = 0; i < data.length; i++) {
        times.push(data[i].time);
        if (tempType === fahrenheit) {
          values.push(data[i].tempF);
        } else if (tempType === celcius) {
          values.push(data[i].tempC);
        }
      }
      return GraphData;
    };

    const graphIdHandler = (id) => {
      setGraphId(id);
    };

    const handleChange = (event) => {
      setTempType(event.target.value);
    };

    const rightHandler = () => {
      if (arrowIndex < days.length - 3) {
        setArrowIndex(arrowIndex + 1);
      }
    };

    const leftHandler = () => {
      if (arrowIndex > 0) {
        setArrowIndex(arrowIndex - 1);
      }
    };

    if (arrowIndex <= 0) {
      leftInvisible = true;
      rightInvisible = false;
    } else if (arrowIndex >= days.length - 3) {
      leftInvisible = false;
      rightInvisible = true;
    } else {
      leftInvisible = false;
      rightInvisible = false;
    }

    return (
      <div className={classes.body}>
        <div className={classes.title}>{city}</div>
        <TempCheck value={tempType} handleChange={handleChange} />
        <Grid
          container
          direction="row"
          justify="space-around"
          className={classes.arrows}
        >
          <Arrow left={true} handler={leftHandler} visible={leftInvisible} />
          <Arrow left={false} handler={rightHandler} visible={rightInvisible} />
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          className={classes.cards}
        >
          {daysToShow.map((day) => (
            <Grid key={day[0].dayId} item className={classes.grid}>
              <DayCard
                dayData={day}
                tempType={tempType}
                handler={graphIdHandler}
              />
            </Grid>
          ))}
        </Grid>
        {days.map(
          (day) =>
            day[0].dayId === graphId && (
              <Graph key={day[0].dayId} data={getTimeAndTemp(day)} />
            )
        )}
      </div>
    );
  }
}

export default App;
