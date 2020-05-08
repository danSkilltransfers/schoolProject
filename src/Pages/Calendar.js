import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import calendar from "../assets/calendar/calendar.png";
import booking from "../assets/calendar/booking.png";

const useStyles = makeStyles((theme) => ({
  container: { maxWidth: "70rem" },

  paper: {
    margin: "0 auto 1rem auto",
    padding: "1rem 2.5rem",
  },
  lessonimage: {
    height: "7rem",
    width: "auto",
  },
  underlinebutton: {
    fontSize: "9px",
    lineHeight: "10px",
    textAlign: "right",
    textDecoration: "underline",
    color: theme.palette.common.titlegray,
    marginRight: "-30px",
  },

  bluebutton: {
    ...theme.typography.bluebutton,
    width: "8rem",
    marginRight: ".5rem",
  },

  calendarbutton: {
    borderRadius: "17px",
    borderColor: theme.palette.common.blue,
    height: "16px",
    width: "104px",
    padding: 0,
    fontSize: "8px",
    color: "white",
    textDecoration: "underline",
    backgroundColor: theme.palette.common.blue,
    "&:hover": { backgroundColor: theme.palette.common.blue },
  },

  bluetext: {
    fontSize: "10px",
    lineHeight: "20px",
    fontWeight: "300",
    color: theme.palette.common.lightblue,
  },
  smallbluetext: {
    ...theme.typography.smallbluetext,
    textDecoration: "underline",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  activity: {
    color: theme.palette.common.titlegray,
    fontSize: "16x",
    lineHeight: "19px",
    textDecoration: "underline",
    margin: "1rem 0 .5rem",
  },
  lessontext: {
    maxWidth: "30rem",
  },
  progressbar: {
    height: "10px",
    maxWidth: "30rem",
    borderRadius: "21px",
    backgroundColor: theme.palette.common.titlegray,
    color: theme.palette.common.lightblue,
  },
  img: {
    width: "80vw",
  },
}));

const Calendar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={8}>
        <div className={classes.toolbarMargin} />
        <Grid item>
          <img src={calendar} alt="calendar" className={classes.img} />
        </Grid>
        <Grid item>
          <img src={booking} alt="booking" className={classes.img} />
        </Grid>
      </Grid>
      <div className={classes.toolbarMargin} />
    </Container>
  );
};
export default Calendar;
