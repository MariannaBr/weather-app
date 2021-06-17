const giveNiceDate = (dayData) => {
  const year = dayData[0].dayId.split("-")[0];
  const month = dayData[0].dayId.split("-")[1];
  const day = dayData[0].dayId.split("-")[2];
  const date = day + ". " + month + ". " + year;
  return date
};

export default giveNiceDate