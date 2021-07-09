import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { Arrow_style } from "../../css/css_config";

const Arrow = (props) => {
  const classes = Arrow_style();
  return (
    <IconButton
      className={classes.button}
      onClick={props.handler}
      disabled={props.visible}
    >
      {props.left ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </IconButton>
  );
};

export default Arrow;
