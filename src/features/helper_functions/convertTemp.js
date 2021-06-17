export function convertKtoF(temp) {
  const tempF = parseFloat(((temp - 273.15) * 9/5 + 32).toFixed(2))
  return tempF
}

export function convertKtoC(temp) {
  const tempC = parseFloat((temp - 273.15).toFixed(2))
  return tempC
}