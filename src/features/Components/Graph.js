import React from "react";
import Chart from "react-apexcharts";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4px",
    paddingTop: "60px",
  },
  chart: {
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
}));

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
          colors: "#9CA3AF",
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "14px",
        },
      },
    },
    dataLabels: {
      enabled: false,
      offsetY: 20,
      style: {
        fontSize: "16px",
        colors: ["#6EE7B7"],
      },
    },
    colors: ["#10B981"],
    title: {
      text: props.data.title,
      align: "center",
    },
  };

  const series = [
    {
      name: "temperature",
      data: props.data.measuredTemperatures,
    },
  ];

  return (
    <div className={classes.root}>
      <Chart
        className={classes.chart}
        type="bar"
        height="300px"
        options={options}
        series={series}
      />
    </div>
  );
};

export default Graph;
