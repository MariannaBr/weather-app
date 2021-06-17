import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#A7F3D0",
  },
}));

const Arrow = (props) => {
  const classes = useStyles();
  return (
    <IconButton className={classes.button} onClick={props.handler} disabled={props.visible}>
      {props.left ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </IconButton>
  );
};

export default Arrow;
