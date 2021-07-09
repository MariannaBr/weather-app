import React from "react";

import { Card, Typography, Button } from "@material-ui/core";
import { DayCard_style } from "../../css/css_config";

import averageTemp from "../helper_functions/averageTemp";
import giveNiceDate from "../helper_functions/niceDate";

import { celcius, fahrenheit } from "../utils/constants";

const DayCard = (props) => {
  const classes = DayCard_style();
  const dayMeasurements = props.dayData;
  const date = giveNiceDate(dayMeasurements);
  const averageTemperature = averageTemp(dayMeasurements, props.tempType);

  let temperatureType;
  if (props.tempType === fahrenheit) {
    temperatureType = "F";
  } else if (props.tempType === celcius) {
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
