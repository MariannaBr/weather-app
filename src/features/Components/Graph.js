import React from 'react'
import Chart from 'react-apexcharts'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: "5rem",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
});

const Graph = (props) => {

  const classes = useStyles();

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: props.data.measurementTimes,
      labels: {
        style: {
          colors: "#D1D5DB",
          fontSize: '14px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: "#D1D5DB",
          fontSize: '14px'
        }
      }
    },
    dataLabels: {
      offsetY: 20,
      style: {
        fontSize: '16px',
        colors: ["#6EE7B7"]
      }
    },
    colors: ["#10B981"],
    title: {
      text: props.data.title,
      align: "center",
    }
  }

  const series = [
    {
      name: "temperature",
      data: props.data.measuredTemperatures
    }
  ]

  return (
    <div className={classes.root}>
      <Chart type="bar" width="500px" height="300px" options={options} series={series} />
    </div>
  )
}

export default Graph