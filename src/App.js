import TempCheck from "./features/Components/TempCheck";
import DayCard from "./features/Components/DayCard";
import Arrow from "./features/Components/Arrow";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux"
import { selectWeather } from "./features/store/weatherSlice"
import "./App.css";

function App() {

  let days_visible = [0, 1, 2];

  const weatherData = useSelector(selectWeather)
  const loading = useSelector(state => state.weather.isLoading)

  console.log("data", weatherData)
  console.log("loading", loading)

  if (loading) {
    return (
      <div>
        <TempCheck />
      </div>
    )
  } else {
    return (
      <div className="App">
      <TempCheck />
      <Grid container direction="row" justify="space-around">
        <Arrow left={true} />
        <Arrow left={false} />
      </Grid>
      <Grid container direction="row" justify="space-evenly">
        {days_visible.map((day) => (
          <Grid key={day} item>
            <DayCard />
          </Grid>
        ))}
      </Grid>
    </div>
    )
  }
}

export default App;
