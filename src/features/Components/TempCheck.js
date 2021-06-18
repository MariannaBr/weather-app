import React from "react";
import { RadioGroup, FormControlLabel, Grid } from "@material-ui/core";
import StyledRadio from "./StyledRadio";

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
            control={<StyledRadio />}
            label="Celcius"
          />
          <FormControlLabel
            value="Fahrenheit"
            control={<StyledRadio />}
            label="Fahrenheit"
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export default TempCheck;
