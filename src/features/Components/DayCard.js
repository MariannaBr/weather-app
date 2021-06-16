import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { useSelector } from 'react-redux'

const DayCard = () => {

  const allMeasurements = useSelector(state => state.weather.data)
  const days = []

  console.log("meas", allMeasurements)

  const addId = (data) => {
    if (data) {
      console.log("data in Daycard", data)
      const id = data.list[0].dt_txt.split(" ")[0]
      console.log("id of 0", id)
      //data.list[0].dayId = id
    }
  }
  addId(allMeasurements)

  for ( var i=1; i<allMeasurements.length; i++ ) {
    const id = allMeasurements[i].dt_txt.split(" ")[0]
    allMeasurements[i].dayId = id
    if (allMeasurements[i].dayId === allMeasurements[i-1].dayId) {
        console.log("ids", allMeasurements[i].dayId, allMeasurements[i-1].dayId)
        console.log("same")
      } else {
        console.log("ids", allMeasurements[i].dayId, allMeasurements[i-1].dayId)
        console.log("not same")
      }

    days.push(allMeasurements[i])
  }

  //console.log("days", days)


  return(
    <Card>
      <CardContent>
        <h2>Hello</h2>
      </CardContent>
    </Card>
  )
}

export default DayCard