import React from "react";
import clsx from "clsx";
import { Radio } from "@material-ui/core";
import { StyledRadio_style } from "../../css/css_config";

function StyledRadio(props) {
  const classes = StyledRadio_style();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default StyledRadio;
