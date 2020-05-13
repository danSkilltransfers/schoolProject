import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import {
  BigBlueRoundButton as LessonButton,
  BlueButton,
  GrayButton,
  SmallBlueText,
} from "../themes/elements.styles";

import shareIcon from "../assets/shareIcon.png";
import lesson1 from "../assets/lesson/lesson1.png";
import lesson2 from "../assets/lesson/lesson2.png";
import lesson3 from "../assets/lesson/lesson3.png";
import lesson4 from "../assets/lesson/lesson4.png";
import lesson5 from "../assets/lesson/lesson5.png";
import lesson6 from "../assets/lesson/lesson6.png";

const useStyles = makeStyles((theme) => ({
  description: {
    ...theme.typography.textDescription,
    color: theme.palette.common.chaptertext,
    [theme.breakpoints.down("md")]: { paddingLeft: 0 },
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  paper: {
    maxWidth: 1000,
    margin: "1rem auto",
    padding: "1rem 2.5rem",
    [theme.breakpoints.down("md")]: { padding: "1rem 1rem" },
  },
  lessonimage: {
    height: "14rem",
    width: "auto",
  },
  activity: {
    color: theme.palette.common.titlegray,
    fontSize: "22px",
    lineHeight: "26px",
    textDecoration: "underline",
    margin: "1rem 0 .5rem",
  },
  lessontext: {
    marginTop: "1rem",
    maxWidth: "35rem",
    textAlign: "justify",
  },
  graybutton: {
    [theme.breakpoints.down("xs")]: { width: "auto" },
  },
  share: {
    marginLeft: "-27px",
    [theme.breakpoints.down("md")]: { marginLeft: 0 },
  },
  bluebutton: {
    [theme.breakpoints.down("xs")]: { width: "auto" },
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

const Spaans = () => {
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
      name: "Hoofdstuk 1: ¡Hola!",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      index: 1,
      date: "31st/ June /2020",
      image: lesson2,
      name: "Hoofdstuk 2: Paises de habla hispana",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      index: 2,
      date: "31st/ July /2020",
      image: lesson3,
      name: "Hoofdstuk 3: La familia",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      index: 3,
      date: "31st/ May /2020",
      image: lesson4,
      name: "Hoofdstuk 4: Comis y bebidas",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      index: 4,
      date: "31st/ May /2020",
      image: lesson5,
      name: "Hoofdstuk 5: ¿Dónde están las llaves?",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      index: 5,
      date: "31st/ May /2020",
      image: lesson6,
      name: "Hoofdstuk 6: ¿A dónde vas?",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
  ];
  const myButtons = [
    {
      section: "Actividades Vocabulario",
      id: 1,
      name: "Ejercicio 1",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 2,
      name: "Ejercicio 2",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 3,
      name: "Ejercicio 3",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 4,
      name: "Ejercicio 4",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 5,
      name: "Ejercicio 5",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 6,
      name: "Ejercicio 6",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 7,
      name: "Ejercicio 7",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 8,
      name: "Ejercicio 8",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 9,
      name: "Ejercicio 9",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 10,
      name: "Ejercicio 10",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 11,
      name: "Ejercicio 11",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 12,
      name: "Ejercicio 12",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 13,
      name: "Ejercicio 13",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 14,
      name: "Ejercicio 14",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Vocabulario",
      id: 15,
      name: "Ejercicio 15",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 1,
      name: "Ejercicio 1",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 2,
      name: "Ejercicio 2",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 3,
      name: "Ejercicio 3",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 4,
      name: "Ejercicio 4",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 5,
      name: "Ejercicio 5",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 6,
      name: "Ejercicio 6",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 7,
      name: "Ejercicio 7",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 8,
      name: "Ejercicio 8",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 9,
      name: "Ejercicio 9",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 10,
      name: "Ejercicio 10",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 11,
      name: "Ejercicio 11",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 12,
      name: "Ejercicio 12",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 13,
      name: "Ejercicio 13",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 14,
      name: "Ejercicio 14",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Gramática",
      id: 15,
      name: "Ejercicio 15",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 1,
      name: "Ejercicio 1",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 2,
      name: "Ejercicio 2",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 3,
      name: "Ejercicio 3",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 4,
      name: "Ejercicio 4",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 5,
      name: "Ejercicio 5",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 6,
      name: "Ejercicio 6",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 7,
      name: "Ejercicio 7",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 8,
      name: "Ejercicio 8",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 9,
      name: "Ejercicio 9",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 10,
      name: "Ejercicio 10",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 11,
      name: "Ejercicio 11",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 12,
      name: "Ejercicio 12",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 13,
      name: "Ejercicio 13",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 14,
      name: "Ejercicio 14",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Comunicación",
      id: 15,
      name: "Ejercicio 15",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 1,
      name: "Ejercicio 1",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 2,
      name: "Ejercicio 2",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 3,
      name: "Ejercicio 3",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 4,
      name: "Ejercicio 4",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 5,
      name: "Ejercicio 5",
      disabled: false,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 6,
      name: "Ejercicio 6",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 7,
      name: "Ejercicio 7",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 8,
      name: "Ejercicio 8",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 9,
      name: "Ejercicio 9",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 10,
      name: "Ejercicio 10",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 11,
      name: "Ejercicio 11",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 12,
      name: "Ejercicio 12",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 13,
      name: "Ejercicio 13",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 14,
      name: "Ejercicio 14",
      disabled: true,
      active: false,
      completed: false,
    },
    {
      section: "Actividades Reflexión y evaluación",
      id: 15,
      name: "Ejercicio 15",
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
    setClicked(false);
  };
  const handleClose = () => {
    setClicked(false);
    if (material) setMaterial(false);
  };
  const buttonClick = () => {
    setActive(true);
    setClicked(true);
  };

  const Chapter = chaptersData.map((lesson, index) => (
    <Paper className={classes.paper} square={true} key={index}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center">
            <Grid item>
              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item className={classes.share}>
                  <img src={shareIcon} alt="shareIcon" />
                </Grid>
                <Grid item>
                  <Typography variant="h6">share</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <SmallBlueText>{lesson.date}</SmallBlueText>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <img
                src={`${lesson.image}`}
                alt="lesson"
                className={classes.lessonimage}
              />
              <Grid item container justify="center" alignItems="center">
                {material && lessonIndex === lesson.index ? (
                  <BlueButton className={classes.bluebutton}>
                    Materiaal
                  </BlueButton>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>

            <Grid item md sm={6} zeroMinWidth>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h4">
                    <u>{lesson.name}</u>
                  </Typography>
                </Grid>

                <Grid item>
                  {material && lessonIndex === lesson.index ? (
                    <Grid container direction="column">
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
                                !item.disabled &&
                                option.section === item.section ? (
                                  <LessonButton
                                    key={index}
                                    active={active}
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
                      </Grid>
                    </Grid>
                  ) : (
                    <Typography variant="h6" className={classes.lessontext}>
                      {lesson.description}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify-sm-flex-start
          justify="flex-end"
          alignItems="flex-end"
          xs={12}>
          {material && lessonIndex === lesson.index ? (
            <>
              <GrayButton
                className={clicked ? classes.blue : ""}
                href="https://drive.google.com/file/d/1pcZgqIMq_QaVO1gEZInaege-qesp9Vdr/view?usp=sharing"
                target='_blank'
                rel="noreferrer noopener">
                Uitleg
              </GrayButton>
              <GrayButton className={clicked ? classes.blue : ""}>
                Kies Lessen
              </GrayButton>
            </>
          ) : (
            ""
          )}

          <BlueButton
            onClick={() => {
              setLessonIndex(lesson.index);
              if (material && lessonIndex === lesson.index) {
                handleClose();
              } else {
                handleOpen();
              }
            }}>
            {material && lessonIndex === lesson.index
              ? "Cancel"
              : "Kies Lessen"}
          </BlueButton>
        </Grid>
      </Grid>
    </Paper>
  ));

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" className={classes.description}>
        Hoofdstukken
      </Typography>
      {Chapter}
      <div className={classes.toolbarMargin} />
    </Container>
  );
};
export default Spaans;
