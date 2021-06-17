const averageTemp = (data, tempType) => {
  let tempSum = 0;
  for (var i = 0; i < data.length; i++) {
    if (tempType === "Fahrenheit") {
      tempSum += data[i].main.tempF;
    } else if (tempType === "Celcius") {
      tempSum += data[i].main.tempC;
    }
  }
  const Temperature = Math.round((tempSum / data.length));
  return Temperature;
};

export default averageTemp