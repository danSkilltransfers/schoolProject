import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import calendar from "../assets/calendar/calendar.png";
import booking from "../assets/calendar/booking.png";

const useStyles = makeStyles((theme) => ({
  container: { maxWidth: "80rem", minHeight:"100vh" },

  paper: {
    margin: "0 auto 1rem auto",
    padding: "1rem 2.5rem",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  img: {
    maxWidth: "90vw",
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
