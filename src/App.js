import TempCheck from "./features/Components/TempCheck";
import DayCard from "./features/Components/DayCard";
import Arrow from "./features/Components/Arrow";
import Graph from "./features/Components/Graph";
import giveNiceDate from "./features/helper_functions/niceDate";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectWeather } from "./features/store/weatherSlice";
import findMeasurementsOfDay from "./features/helper_functions/dayData";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "2px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
      maxWidth: 400,
    },
  },
  loading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "blue",
  },
  arrows: {
    paddingTop: "40px"
  },
  cards: {
    paddingTop: "40px"
  },
  title: {
    padding: "40px",
    fontWeight: "bold",
    fontSize: "40px",
    color: "#10B981"
  }
}));

function App() {
  const classes = useStyles();
  const [tempType, setTempType] = useState("Fahrenheit");
  const [arrowIndex, setArrowIndex] = useState(0);
  const [graphId, setGraphId] = useState("");
  const weatherData = useSelector(selectWeather);
  const loading = useSelector((state) => state.weather.isLoading);
  let rightInvisible = false;
  let leftInvisible = true;

  if (loading) {
    return (
      <div className="App">
        <div className={classes.loading}>Loading</div>
      </div>
    );
  } else {
    const days = findMeasurementsOfDay(weatherData);
    const daysToShow = days.slice(arrowIndex, arrowIndex + 3);
    const city = weatherData[0].city

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
        if (tempType === "Fahrenheit") {
          values.push(data[i].main.tempF);
        } else if (tempType === "Celcius") {
          values.push(data[i].main.tempC);
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
      setGraphId("");
    };

    const leftHandler = () => {
      if (arrowIndex > 0) {
        setArrowIndex(arrowIndex - 1);
      }
      setGraphId("");
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
      <div className="App">
      <div className={classes.title}>{city}</div>
        <TempCheck value={tempType} handleChange={handleChange} />
        <Grid container direction="row" justify="space-around" className={classes.arrows}>
          <Arrow left={true} handler={leftHandler} visible={leftInvisible} />
          <Arrow left={false} handler={rightHandler} visible={rightInvisible} />
        </Grid>
        <Grid container direction="row" justify="space-evenly" className={classes.cards}>
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
        {daysToShow.map(
          (day) =>
            day[0].dayId === graphId && <Graph key={day[0].dayId} data={getTimeAndTemp(day)} />
        )}
      </div>
    );
  }
}

export default App;
