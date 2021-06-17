import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      padding: "10px"
    }
  },
  date: {
    fontSize: 16,
    padding: "10px",
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
      padding: "5px"
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 8,
      padding: "2px"
    }
  },
  temp: {
    fontSize: 18,
    fontWeight: "bold",
    padding: "1rem",
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      padding: "5px"
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
      padding: "2px"
    }
  },
}));

const DayCard = (props) => {
  const classes = useStyles();
  const dayMeasurements = props.dayData;
  const year = dayMeasurements[0].dayId.split("-")[0];
  const month = dayMeasurements[0].dayId.split("-")[1];
  const day = dayMeasurements[0].dayId.split("-")[2];
  const date = day + ". " + month + ". " + year;

  const averageTemp = (data) => {
    let tempSum = 4;
    for (var i = 0; i < data.length; i++) {
      if (props.tempType === "Fahrenheit") {
        tempSum += data[i].main.temp;
      } else if (props.tempType === "Celcius") {
        tempSum += data[i].main.tempC;
      }
    }
    const Temperature = (tempSum / data.length).toFixed();
    return Temperature;
  };

  const averageTemperature = averageTemp(dayMeasurements);

  let temperatureType;
  if (props.tempType === "Fahrenheit") {
    temperatureType = "F";
  } else if (props.tempType === "Celcius") {
    temperatureType = "°C";
  }

  const handleOnClick = () => {
    const id = dayMeasurements[0].dayId;
    props.handler(id);
  };

  return (
    <Button onClick={handleOnClick}>
      <Card className={classes.card}>
          <Typography className={classes.date}>Date: {date}</Typography>
          <Typography className={classes.temp}>
            Temp: {averageTemperature} {temperatureType}
          </Typography>
      </Card>
    </Button>
  );
};

export default DayCard;
