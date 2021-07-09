import { celcius, fahrenheit } from "../utils/constants";

const averageTemp = (data, tempType) => {
  let tempSum = 0;
  for (var i = 0; i < data.length; i++) {
    if (tempType === fahrenheit) {
      tempSum += data[i].tempF;
    } else if (tempType === celcius) {
      tempSum += data[i].tempC;
    }
  }
  const Temperature = Math.round((tempSum / data.length));
  return Temperature;
};

export default averageTemp