import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import averageTemp from "../helper_functions/averageTemp";
import giveNiceDate from "../helper_functions/niceDate";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:focus": {
      boxShadow: "0 0 0 0.1rem #10B981",
    },
  },
  card: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  date: {
    fontSize: 16,
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      padding: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
      padding: "2px",
    },
  },
  temp: {
    fontSize: 18,
    color: "#10B981",
    fontWeight: "bold",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      padding: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      padding: "2px",
    },
  },
}));

const DayCard = (props) => {
  const classes = useStyles();
  const dayMeasurements = props.dayData;
  const date = giveNiceDate(dayMeasurements);
  const averageTemperature = averageTemp(dayMeasurements, props.tempType);

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
    <Button onClick={handleOnClick} disableRipple className={classes.button}>
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
