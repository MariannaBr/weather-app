import React from "react";
import Chart from "react-apexcharts";

import { Graph_style } from "../../css/css_config";

const Graph = (props) => {
  const classes = Graph_style();

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
