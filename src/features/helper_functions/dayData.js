const findMeasurementsOfDay = (data) => {
  const days = []
  let day = [data[0]]
  for (var i=1; i<data.length; i++) {
    if (data[i].dayId === data[i-1].dayId) {
      day.push(data[i])
    } else {
      days.push(day)
      day = [data[i]]
    }
  }
  days.push(day)
  day = []
  return days
}

export default findMeasurementsOfDay