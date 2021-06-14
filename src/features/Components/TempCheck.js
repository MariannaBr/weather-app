import React, { useState } from "react";
import { RadioGroup, FormControlLabel, Radio, Grid } from "@material-ui/core";

const TempCheck = () => {
  const [value, setValue] = useState("Fahrenheit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid container direction="row" justify="space-evenly">
    <Grid item>
      <RadioGroup row name="temperature" value={value} onChange={handleChange}>
        <FormControlLabel value="Celcius" control={<Radio />} label="Celcius" />
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
