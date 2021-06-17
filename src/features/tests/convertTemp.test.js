import { convertKtoC, convertKtoF } from "../helper_functions/convertTemp";

describe("convert temperatures", () => {
  const tempInKelvin = 295;
  it("should convert temperature to Celcius", () => {
    expect(convertKtoC(tempInKelvin)).toEqual(21.85);
  });
});

describe("convert temperatures", () => {
  const tempInKelvin = 295;
  it("should convert temperature to Fahrenheit", () => {
    expect(convertKtoF(tempInKelvin)).toEqual(71.33);
  });
});