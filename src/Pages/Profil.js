import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Button,
  Paper,
  Typography,
  LinearProgress,
} from "@material-ui/core";

import lesson1 from "../assets/lesson/lesson1.png";
import biology from "../assets/profile/biology.png";
import precalculus from "../assets/profile/precalculus.png";
import steps from "../assets/profile/steps.png";
import info from "../assets/profile/info.png";

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
  info: {
    height: "40rem",
    maxWidth: "90vw",
  },
}));

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#E5E5E5",
  },
  barColorPrimary: {
    backgroundColor: "#0AB5FE",
  },
})(LinearProgress);

const LessonButton = withStyles({
  root: {
    border: `1px solid #0AB5FE`,
    borderRadius: "40px",
    backgroundColor: `#FFFFFF`,
    padding: "2px 8px",
    color: `#0AB5FE`,
    textTransform: "none",
    margin: ".5rem",
    "&:hover": {
      color: `#FFFFFF`,
      backgroundColor: `#0AB5FE`,
    },
    "&:active": {
      color: `#FFFFFF`,
      backgroundColor: `#0AB5FE`,
    },
  },
})(Button);

const Spaans = () => {
  const classes = useStyles();

  const [material, setMaterial] = useState(false);
  const [index, setIndex] = useState(0);

  const chaptersData = [
    {
      index: 0,
      date: "31st/ Sept /2020",
      image: lesson1,
      name: "Hoofdstuk 1: ¡Hola!",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
      progress: 10,
      activities: "01/20 activities",
      course: "Spaans",
    },
    {
      index: 1,
      date: "31st/ June /2020",
      image: biology,
      name: "Hoofdstuk 2: De cel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, velit phasellus ultricies montes augue aliquam curabitur, hendrerit sociis purus fames libero eleifend.",
      progress: 25,
      activities: "01/05 activities",
      course: "Biologie",
    },
    {
      index: 2,
      date: "31st/ July /2020",
      image: precalculus,
      name: "Hoofdstuk 3: Calculus",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, velit phasellus ultricies montes augue aliquam curabitur, hendrerit sociis purus fames libero eleifend.",
      progress: 20,
      activities: "01/06 activities",
      course: "Wiskunde",
    },
  ];

  const Info = (
    <Paper square={true}>
      <img src={info} alt="info" className={classes.info} />
    </Paper>
  );

  const Chapter = chaptersData.map((lesson) => (
    <Paper className={classes.paper} square={true} key={`${lesson.index}`}>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center">
            <Grid item>
              <Button
                className={classes.underlinebutton}
                onClick={() => {
                  setMaterial(!material);
                  setIndex(lesson.index);
                }}>
                {material && index === lesson.index ? "See less" : "See more"}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <img
                    src={`${lesson.image}`}
                    alt="lesson"
                    className={classes.lessonimage}
                  />
                </Grid>

                <Grid item container justify="center" alignItems="center">
                  <img src={steps} alt="lesson" />
                </Grid>

                <Grid item container justify="center" alignItems="center">
                  <Button variant="outlined" className={classes.calendarbutton}>
                    Check Calendar
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm zeroMinWidth>
              <Grid
                container
                direction="column"
                spacing={2}
                className={classes.lessontext}>
                <Grid item>
                  <Typography variant="h4">
                    <u>{lesson.name}</u>
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="h6">{lesson.description}</Typography>
                </Grid>

                <Grid item>
                  <ColorLinearProgress
                    className={classes.progressbar}
                    variant="determinate"
                    value={lesson.progress}
                  />
                </Grid>
                <Grid
                  item
                  container
                  justify="space-between"
                  className={classes.bluetext}>
                  <Typography>{lesson.activities}</Typography>
                  <Typography>{lesson.course}</Typography>
                </Grid>
              </Grid>
            </Grid>
            {material && index === lesson.index ? (
              <Grid container direction="column">
                <Grid item>
                  <Typography className={classes.activity}>
                    Actividades Vocabulario
                  </Typography>
                  <Grid item container spacing={2}>
                    <LessonButton>Ejercicio 1</LessonButton>
                    <LessonButton>Ejercicio 3</LessonButton>
                    <LessonButton>Ejercicio 5</LessonButton>
                    <LessonButton>Ejercicio 7</LessonButton>
                    <LessonButton>Ejercicio 9</LessonButton>
                    <LessonButton>Ejercicio 10</LessonButton>
                    <LessonButton>Ejercicio 11</LessonButton>
                  </Grid>

                  <Grid item>
                    <Typography className={classes.activity}>
                      Actividades Gramática
                    </Typography>
                    <Grid item container spacing={2}>
                      <LessonButton>Ejercicio 1</LessonButton>
                      <LessonButton>Ejercicio 3</LessonButton>
                      <LessonButton>Ejercicio 4</LessonButton>
                      <LessonButton>Ejercicio 5</LessonButton>
                      <LessonButton>Ejercicio 6</LessonButton>
                      <LessonButton>Ejercicio 7</LessonButton>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Typography className={classes.activity}>
                      Actividades Comunicación
                    </Typography>
                    <Grid item container spacing={2}>
                      <LessonButton>Ejercicio 4</LessonButton>
                      <LessonButton>Ejercicio 6</LessonButton>
                      <LessonButton>Ejercicio 8</LessonButton>
                    </Grid>

                    <Grid item>
                      <Typography className={classes.activity}>
                        Actividades Reflexión y evaluación
                      </Typography>
                      <Grid item container spacing={2}>
                        <LessonButton>Ejercicio 1</LessonButton>
                        <LessonButton>Ejercicio 2</LessonButton>
                        <LessonButton>Ejercicio 3</LessonButton>
                        <LessonButton>Ejercicio 4</LessonButton>
                        <LessonButton>Ejercicio 5</LessonButton>
                      </Grid>

                      <Grid item>
                        <Grid container spacing={2} justify="space-between">
                          <Grid item>
                            <Button className={classes.bluebutton}>
                              Evaluatie
                            </Button>

                            <Button className={classes.bluebutton}>
                              Hoofdstukken
                            </Button>
                          </Grid>

                          <Grid item className={classes.smallbluetext}>
                            Hoofdstuk verschuldigd voor: <br />
                            {lesson.date}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  ));

  // useEffect(() => {
  //   chaptersData.forEach((lesson) => {
  //     if (index !== lesson.index && material) {
  //       setIndex(lesson.index);
  //     }
  //   });
  // }, [index, material, chaptersData]);

  return (
    <Container className={classes.container}>
      <div className={classes.toolbarMargin} />
      <Grid container spacing={2}>
        <Grid item md={4}>
          {Info}
        </Grid>
        <Grid item md={8}>
          {Chapter}
        </Grid>
      </Grid>

      <div className={classes.toolbarMargin} />
    </Container>
  );
};
export default Spaans;
