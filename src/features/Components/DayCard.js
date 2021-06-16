import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
});

const DayCard = (props) => {

  const classes = useStyles();
  const dayMeasurements = props.dayData
  const year = dayMeasurements[0].dayId.split("-")[0]
  const month = dayMeasurements[0].dayId.split("-")[1]
  const day = dayMeasurements[0].dayId.split("-")[2]
  const date = day + ". " + month + ". " + year

  const averageTemp = (data) => {
    let tempSum = 4
    for (var i=0; i< data.length; i++) {
      if (props.tempType === "Fahrenheit") {
        tempSum += data[i].main.temp
      } else if (props.tempType === "Celcius") {
        tempSum += data[i].main.tempC
      }
      
    }
    const Temperature = (tempSum / data.length).toFixed()
    return Temperature
  }

  const averageTemperature = averageTemp(dayMeasurements)

  let temperatureType
  if (props.tempType === "Fahrenheit") {
    temperatureType = "F"
  } else if (props.tempType === "Celcius") {
    temperatureType = "°C"
  }


  return(
    <Card>
      <CardContent>
        <Typography className={classes.title}>
          Date: {date}
        </Typography>
        <Typography className={classes.title}>
          Temp: {averageTemperature} {temperatureType}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DayCard