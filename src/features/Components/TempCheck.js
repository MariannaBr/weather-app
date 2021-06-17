import React from "react";
import { RadioGroup, FormControlLabel, Radio, Grid } from "@material-ui/core";

const TempCheck = (props) => {

  return (
    <Grid container direction="row" justify="space-evenly">
      <Grid item>
        <RadioGroup
          row
          name="temperature"
          value={props.value ? props.value : "Fahrenheit"}
          onChange={props.handleChange}
        >
          <FormControlLabel
            value="Celcius"
            control={<Radio />}
            label="Celcius"
          />
          <FormControlLabel
            value="Fahrenheit"
            control={<Radio />}
            label="Fahrenheit"
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export default TempCheck;
