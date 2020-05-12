import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button, Paper, Typography } from "@material-ui/core";

import {
  BlueRoundButton as LessonButton,
  ColorLinearProgress as Progress,
  CalendarButton,
  GrayButton,
  SmallBlueText,
} from "../themes/elements.styles";

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
    [theme.breakpoints.down("md")]: { padding: "1rem 1rem" },
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
    [theme.breakpoints.down("md")]: { marginRight: "-10px" },
  },
  bluetext: {
    fontSize: "10px",
    lineHeight: "20px",
    fontWeight: "300",
    color: theme.palette.common.lightblue,
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
  info: {
    height: "40rem",
    maxWidth: "90vw",
  },
  blue: {
    color: "white",
    backgroundColor: theme.palette.common.lightblue,
  },
  gray: {
    color: theme.palette.common.titlegray,
    border: `1px solid ${theme.palette.common.titlegray}`,
  },
}));

const Profil = () => {
  const classes = useStyles();

  const [material, setMaterial] = useState(false);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  const chaptersData = [
    {
      index: 0,
      date: "31st/ Sept /2020",
      image: lesson1,
      chapter: "Hoofdstuk 1: ¡Hola!",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
      progress: 10,
      left: "01/20 activities",
      course: "Spaans",
    },
    {
      index: 1,
      date: "31st/ June /2020",
      image: biology,
      chapter: "Hoofdstuk 1: De cel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, velit phasellus ultricies montes augue aliquam curabitur, hendrerit sociis purus fames libero eleifend.",
      progress: 25,
      left: "01/05 activities",
      course: "Biologie",
    },
    {
      index: 2,
      date: "31st/ July /2020",
      image: precalculus,
      chapter: "Hoofdstuk 2: Calculus",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, velit phasellus ultricies montes augue aliquam curabitur, hendrerit sociis purus fames libero eleifend.",
      progress: 20,
      left: "01/06 activities",
      course: "Wiskunde",
    },
  ];
  const myButtons = [
    {
      section: "Actividades Vocabulario",
      id: 1,
      name: "Exercise 1",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 2,
      name: "Exercise 2",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 3,
      name: "Exercise 3",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 4,
      name: "Exercise 4",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 5,
      name: "Exercise 5",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 6,
      name: "Exercise 6",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 7,
      name: "Exercise 7",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 8,
      name: "Exercise 8",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 9,
      name: "Exercise 9",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 10,
      name: "Exercise 10",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 11,
      name: "Exercise 11",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 12,
      name: "Exercise 12",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 13,
      name: "Exercise 13",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 14,
      name: "Exercise 14",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 15,
      name: "Exercise 15",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 1,
      name: "Exercise 1",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 2,
      name: "Exercise 2",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 3,
      name: "Exercise 3",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 4,
      name: "Exercise 4",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 5,
      name: "Exercise 5",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 6,
      name: "Exercise 6",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 7,
      name: "Exercise 7",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 8,
      name: "Exercise 8",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 9,
      name: "Exercise 9",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 10,
      name: "Exercise 10",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 11,
      name: "Exercise 11",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 12,
      name: "Exercise 12",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 13,
      name: "Exercise 13",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 14,
      name: "Exercise 14",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 15,
      name: "Exercise 15",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 1,
      name: "Exercise 1",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 2,
      name: "Exercise 2",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 3,
      name: "Exercise 3",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 4,
      name: "Exercise 4",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 5,
      name: "Exercise 5",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 6,
      name: "Exercise 6",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 7,
      name: "Exercise 7",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 8,
      name: "Exercise 8",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 9,
      name: "Exercise 9",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 10,
      name: "Exercise 10",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 11,
      name: "Exercise 11",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 12,
      name: "Exercise 12",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 13,
      name: "Exercise 13",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 14,
      name: "Exercise 14",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 15,
      name: "Exercise 15",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 1,
      name: "Exercise 1",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 2,
      name: "Exercise 2",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 3,
      name: "Exercise 3",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 4,
      name: "Exercise 4",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 5,
      name: "Exercise 5",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 6,
      name: "Exercise 6",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 7,
      name: "Exercise 7",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 8,
      name: "Exercise 8",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 9,
      name: "Exercise 9",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 10,
      name: "Exercise 10",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 11,
      name: "Exercise 11",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 12,
      name: "Exercise 12",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 13,
      name: "Exercise 13",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 14,
      name: "Exercise 14",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 15,
      name: "Exercise 15",
      disabled: true,
      active: false,
      completed: false,
    },
  ];

  const exercises = [
    {
      chapter: "Chapter1: Hola",
      section: "Actividades Vocabulario",
      name: "Exercise 1",
      number: "1",
    },
    {
      chapter: "Chapter1: Hola",
      section: "Actividades Gramática",
      name: "Exercise 2",
      number: "2",
    },
    {
      chapter: "Chapter1: Hola",
      section: "Actividades Comunicación",
      name: "Exercise 3",
      number: "3",
    },
    {
      chapter: "Chapter1: Hola",
      section: "Actividades Reflexión y evaluación",
      name: "Exercise 4",
      number: "4",
    },
  ];

  const handleOpen = () => {
    setMaterial(true);
    setActive(false);
    setClicked(false)
  };
  const handleClose = () => {
    setClicked(false)
    if (material) setMaterial(false);
  };
  const buttonClick = () => {
    setActive(true);
    setClicked(true);
  };
  // const buttonColor = () => {
  //   if (myButtons.active === active) {
  //     setColor();
  //   } else {
  //   }
  // };

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
                  setLessonIndex(lesson.index);
                  if (material && lessonIndex === lesson.index) {
                    handleClose();
                  } else {
                    handleOpen();
                  }
                }}>
                {material && lessonIndex === lesson.index
                  ? "See less"
                  : "See more"}
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
                  <CalendarButton>Check Calendar</CalendarButton>
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
                    <u>{lesson.chapter}</u>
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="h6">{lesson.description}</Typography>
                </Grid>

                <Grid item>
                  <Progress variant="determinate" value={lesson.progress} />
                </Grid>
                <Grid
                  item
                  container
                  justify="space-between"
                  className={classes.bluetext}>
                  <Typography>{lesson.left}</Typography>
                  <Typography>{lesson.course}</Typography>
                </Grid>
              </Grid>
            </Grid>
            {material && lessonIndex === lesson.index ? (
              <Grid container direction="column" style={{ padding: ".5rem" }}>
                <Grid item>
                  {exercises.map((option) => (
                    <>
                      <Typography
                        className={classes.activity}
                        key={option.section}>
                        {option.section}
                      </Typography>
                      <Grid item container spacing={2}>
                        {myButtons.map((item, index) =>
                          !item.disabled && option.section === item.section ? (
                            <LessonButton
                              key={index}
                              // section={item.section}
                              // id={item.id}
                              // name={item.name}
                              // disabled={item.disabled}
                              active={active}
                              // completed={item.completed}
                              onClick={() => {
                                buttonClick();
                                setButtonIndex(index);
                              }}
                              className={
                                active && index === buttonIndex
                                  ? classes.blue
                                  : !active
                                  ? ""
                                  : classes.gray
                              }>
                              {item.name}
                            </LessonButton>
                          ) : (
                            ""
                          )
                        )}
                      </Grid>
                    </>
                  ))}

                  <Grid item>
                    <Grid container spacing={2} justify="space-between">
                      <Grid item>
                        <GrayButton className={clicked ? classes.blue : ""}>
                          Evaluatie
                        </GrayButton>

                        <GrayButton className={clicked ? classes.blue : ""}>
                          Hoofdstukken
                        </GrayButton>
                      </Grid>

                      <Grid item>
                        <SmallBlueText>{lesson.date}</SmallBlueText>
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

  useEffect(() => {}, [material, lessonIndex, active]);

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
export default Profil;
