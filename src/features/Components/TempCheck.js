import React from "react";
import { RadioGroup, FormControlLabel, Grid } from "@material-ui/core";
import StyledRadio from "./StyledRadio";
import { celcius, fahrenheit } from "../utils/constants";

const TempCheck = (props) => {
  return (
    <Grid container direction="row" justify="space-evenly">
      <Grid item>
        <RadioGroup
          row
          name="temperature"
          value={props.value}
          onChange={props.handleChange}
        >
          <FormControlLabel
            value={celcius}
            control={<StyledRadio />}
            label={celcius}
            data-cy={celcius}
          />
          <FormControlLabel
            value={fahrenheit}
            control={<StyledRadio />}
            label={fahrenheit}
            data-cy={fahrenheit}
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export default TempCheck;
