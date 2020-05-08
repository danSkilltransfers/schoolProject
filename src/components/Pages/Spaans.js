import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button, Paper, Typography } from "@material-ui/core";

import shareIcon from "../../assets/shareIcon.png";
import lesson1 from "../../assets/lesson/lesson1.png";
import lesson2 from "../../assets/lesson/lesson2.png";
import lesson3 from "../../assets/lesson/lesson3.png";
import lesson4 from "../../assets/lesson/lesson4.png";
import lesson5 from "../../assets/lesson/lesson5.png";
import lesson6 from "../../assets/lesson/lesson6.png";

const useStyles = makeStyles((theme) => ({
  description: {
    ...theme.typography.textDescription,
    color: theme.palette.common.chaptertext,
    [theme.breakpoints.down("md")]: { paddingLeft: 0 },
  },
  paper: {
    maxWidth: 1000,
    margin: "1rem auto",
    padding: "1rem 2.5rem",
  },
  lessonimage: {
    height: "14rem",
    width: "auto",
  },
  bluebutton: {
    ...theme.typography.bluebutton,
    "&:hover": { background: theme.palette.common.titlegray },
    width: "8rem",
  },
  roundbutton: {
    ...theme.typography.roundbutton,
    margin: ".5rem",
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
    fontFamily: "Roboto",
    fontSize: "22px",
    lineHeight: "26px",
    textDecoration: "underline",
    margin: "1rem 0 .5rem",
  },
  lessontext: {
    maxWidth: "35rem",
  },
  graybutton: {
    backgroundColor: theme.palette.common.titlegray,
    color: "white",
    margin: ".5rem 1rem 0 0",
    textTransform: "none",
    width:'8rem'
  },
}));

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

  const Chapter = chaptersData.map((lesson) => (
    <Paper className={classes.paper} square={true} key={`${lesson.index}`}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center">
            <Grid item>
              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item style={{ marginLeft: "-27px" }}>
                  <img src={shareIcon} alt="shareIcon" />
                </Grid>
                <Grid item>
                  <Typography variant="h6">share</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.smallbluetext}>
              Hoofdstuk verschuldigd voor: <br />
              {lesson.date}
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
                {material && index === lesson.index ? (
                  <Button variant="contained" className={classes.graybutton}>
                    Materiaal
                  </Button>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>

            <Grid item md={8} sm={6} zeroMinWidth>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Typography variant="h4">
                    <u>{lesson.name}</u>
                  </Typography>
                </Grid>

                <Grid item>
                  {material && index === lesson.index ? (
                    <Grid container direction="column">
                      <Grid item>
                        <Typography className={classes.activity}>
                          Actividades Vocabulario
                        </Typography>
                        <Grid item container spacing={2}>
                          <Button
                            variant="outlined"
                            className={classes.roundbutton}>
                            <Typography variant="h6">Ejercicio 1</Typography>
                          </Button>
                          <Button
                            variant="outlined"
                            className={classes.roundbutton}>
                            <Typography variant="h6">Ejercicio 3</Typography>
                          </Button>
                          <Button
                            variant="outlined"
                            className={classes.roundbutton}>
                            <Typography variant="h6">Ejercicio 7</Typography>
                          </Button>
                          <Button
                            variant="outlined"
                            className={classes.roundbutton}>
                            <Typography variant="h6">Ejercicio 9</Typography>
                          </Button>
                          <Button
                            variant="outlined"
                            className={classes.roundbutton}>
                            <Typography variant="h6">Ejercicio 10</Typography>
                          </Button>
                          <Button
                            variant="outlined"
                            className={classes.roundbutton}>
                            <Typography variant="h6">Ejercicio 11</Typography>
                          </Button>
                        </Grid>

                        <Grid item>
                          <Typography className={classes.activity}>
                            Actividades Gramática
                          </Typography>
                          <Grid item container spacing={2}>
                            <Button
                              variant="outlined"
                              className={classes.roundbutton}>
                              <Typography variant="h6">Ejercicio 1</Typography>
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.roundbutton}>
                              <Typography variant="h6">Ejercicio 3</Typography>
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.roundbutton}>
                              <Typography variant="h6">Ejercicio 4</Typography>
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.roundbutton}>
                              <Typography variant="h6">Ejercicio 5</Typography>
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.roundbutton}>
                              <Typography variant="h6">Ejercicio 6</Typography>
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.roundbutton}>
                              <Typography variant="h6">Ejercicio 7</Typography>
                            </Button>
                          </Grid>
                        </Grid>

                        <Grid item>
                          <Typography className={classes.activity}>
                            Actividades Comunicación
                          </Typography>
                          <Grid item container spacing={2}>
                            <Button
                              variant="outlined"
                              className={classes.roundbutton}>
                              <Typography variant="h6">Ejercicio 4</Typography>
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.roundbutton}>
                              <Typography variant="h6">Ejercicio 6</Typography>
                            </Button>
                            <Button
                              variant="outlined"
                              className={classes.roundbutton}>
                              <Typography variant="h6">Ejercicio 8</Typography>
                            </Button>
                          </Grid>

                          <Grid item>
                            <Typography className={classes.activity}>
                              Actividades Reflexión y evaluación
                            </Typography>
                            <Grid item container>
                              <Button
                                variant="outlined"
                                className={classes.roundbutton}>
                                <Typography variant="h6">
                                  Ejercicio 1
                                </Typography>
                              </Button>
                              <Button
                                variant="outlined"
                                className={classes.roundbutton}>
                                <Typography variant="h6">
                                  Ejercicio 2
                                </Typography>
                              </Button>
                              <Button
                                variant="outlined"
                                className={classes.roundbutton}>
                                <Typography variant="h6">
                                  Ejercicio 3
                                </Typography>
                              </Button>
                              <Button
                                variant="outlined"
                                className={classes.roundbutton}>
                                <Typography variant="h6">
                                  Ejercicio 4
                                </Typography>
                              </Button>
                              <Button
                                variant="outlined"
                                className={classes.roundbutton}>
                                <Typography variant="h6">
                                  Ejercicio 5
                                </Typography>
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
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
        <Grid item sm container justify="flex-end" alignItems="flex-end">
          {/* {material && index === lesson.index ? (
            <>
              {" "}
              <Button variant="contained" className={classes.graybutton}>
                Uitleg
              </Button>
              <Button variant="contained" className={classes.graybutton}>
                Kies Lessen
              </Button>
            </>
          ) : (
            ""
          )} */}

          <Button
            className={classes.bluebutton}
            onClick={() => {
              setMaterial(!material);
              setIndex(lesson.index);
            }}>
            {material && index === lesson.index ? "Uitleg" : "Kies Lessen"}
          </Button>
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
