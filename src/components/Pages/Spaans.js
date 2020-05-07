import React from "react";
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
    width: "8rem",
  },
  smallbluetext: {
    ...theme.typography.smallbluetext,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  }
}));

const Spaans = () => {
  const classes = useStyles();

  const chaptersData = [
    {
      date: "31st/ Sept /2020",
      image: lesson1,
      name: "Hoofdstuk 1: ¡Hola!",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      date: "31st/ June /2020",
      image: lesson2,
      name: "Hoofdstuk 2: Paises de habla hispana",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      date: "31st/ July /2020",
      image: lesson3,
      name: "Hoofdstuk 3: La familia",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      date: "31st/ May /2020",
      image: lesson4,
      name: "Hoofdstuk 4: Comis y bebidas",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      date: "31st/ May /2020",
      image: lesson5,
      name: "Hoofdstuk 5: ¿Dónde están las llaves?",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
    {
      date: "31st/ May /2020",
      image: lesson6,
      name: "Hoofdstuk 6: ¿A dónde vas?",
      description:
        "Leer Spaans in de lente! Of je je nu wilt voorbereiden op een reis naar Spanje of een ander Spaanstalig land, of je meer wilt verdiepen in de wereldtaal die deuren opent naar de cultuur van al die landen",
    },
  ];

  const Chapter = chaptersData.map((lesson) => (
    <Paper className={classes.paper} square={true} key={`${lesson.name}`}>
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
              <u>
                Hoofdstuk verschuldigd voor: <br />
                {lesson.date}
              </u>
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
            </Grid>

            <Grid item sm={6} zeroMinWidth>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Typography variant="h4">
                    <u>{lesson.name}</u>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{lesson.description}</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              sm
              container
              direction="column"
              justify="flex-end"
              alignItems="flex-end">
              <Button className={classes.bluebutton}>Kies Lessen</Button>
            </Grid>
          </Grid>
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
      <div className={classes.toolbarMargin}/>
    </Container>
  );
};
export default Spaans;
