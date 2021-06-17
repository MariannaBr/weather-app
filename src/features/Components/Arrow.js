import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const Arrow = (props) => {
  return (
    <IconButton onClick={props.handler} disabled={props.visible}>
      {props.left ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </IconButton>
  );
};

export default Arrow;
