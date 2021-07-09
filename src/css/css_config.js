import { makeStyles } from "@material-ui/core/styles";

import { mainColor } from "../features/utils/colors";

export const App_style = makeStyles((theme) => ({
  body: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
  },
  grid: {
    padding: "2px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
      maxWidth: 400,
    },
  },
  loading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: mainColor,
  },
  arrows: {
    paddingTop: "40px",
  },
  cards: {
    paddingTop: "40px",
  },
  title: {
    padding: "40px",
    fontWeight: "bold",
    fontSize: "40px",
    color: mainColor,
  },
}));

export const Arrow_style = makeStyles((theme) => ({
  button: {
    backgroundColor: "#A7F3D0",
  },
}));

export const DayCard_style = makeStyles((theme) => ({
  button: {
    "&:focus": {
      boxShadow: "0 0 0 0.1rem #10B981",
    },
  },
  card: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  date: {
    fontSize: 16,
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      padding: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
      padding: "2px",
    },
  },
  temp: {
    fontSize: 18,
    color: mainColor,
    fontWeight: "bold",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      padding: "5px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      padding: "2px",
    },
  },
}));

export const Graph_style = makeStyles((theme) => ({
  root: {
    padding: "4px",
    paddingTop: "60px",
  },
  chart: {
    width: "600px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
}));

export const StyledRadio_style = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: mainColor,
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: mainColor,
    },
  },
});

