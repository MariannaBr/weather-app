import averageTemp from "../helper_functions/averageTemp";

describe("average temperature of the day", () => {
  const type = "Celcius";
  const data = [
    {
      main: {
        tempC: 10,
      },
    },
    {
      main: {
        tempC: 20,
      },
    },
    {
      main: {
        tempC: 30,
      },
    },
    {
      main: {
        tempC: 20,
      },
    },
  ];
  it('should calculate the average from all inputs', () => {
    expect(averageTemp(data, type)).toEqual(20)
  })
});

describe("average temperature of the day", () => {
  const type = "Fahrenheit";
  const data = [
    {
      main: {
        tempF: 50,
      },
    },
    {
      main: {
        tempF: 60,
      },
    },
    {
      main: {
        tempF: 40,
      },
    },
    {
      main: {
        tempF: 50,
      },
    },
  ];
  it('should calculate the average from all inputs', () => {
    expect(averageTemp(data, type)).toEqual(50)
  })
});
