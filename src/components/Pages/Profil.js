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

import lesson1 from "../../assets/lesson/lesson1.png";
import biology from "../../assets/profile/biology.png";
import precalculus from "../../assets/profile/precalculus.png";
import steps from "../../assets/profile/steps.png";

const useStyles = makeStyles((theme) => ({
  container: { maxWidth: "70rem" },

  paper: {
    margin: "1rem auto",
    padding: "1rem 2.5rem",
  },
  lessonimage: {
    height: "7rem",
    width: "auto",
  },
  underlinebutton: {
    fontFamily: "Roboto",
    fontSize: "9px",
    lineHeight: "10px",
    textAlign: "right",
    textDecoration: "underline",
    color: theme.palette.common.titlegray,
    marginRight: "-30px",
  },

  bluebutton: {
    ...theme.typography.bluebutton,
    "&:hover": { background: theme.palette.common.titlegray },
    width: "8rem",
  },
  roundbutton: {
    borderRadius: "17px",
    borderColor: theme.palette.common.blue,
    height: "16px",
    width: "104px",
    padding: 0,
    backgroundColor: theme.palette.common.blue,
    "&:hover": { backgroundColor: theme.palette.common.blue },
  },
  roundbuttontext: {
    fontFamily: "Roboto",
    fontSize: "8px",
    color: "white",
    textDecoration: "underline",
  },
  bluetext: {
    fontFamily: "Roboto",
    fontSize: "10px",
    lineHeight: "20px",
    fontWeight:"300",
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
    fontFamily: "Roboto",
    fontSize: "22px",
    lineHeight: "26px",
    textDecoration: "underline",
    margin: "1rem 0 .5rem",
  },
  lessontext: {
    maxWidth: "30rem",
  },
  graybutton: {
    backgroundColor: theme.palette.common.titlegray,
    color: "white",
    margin: ".5rem 1rem 0 0",
    textTransform: "none",
    width: "8rem",
  },
  progressbar: {
    height: "10px",
    maxWidth: "30rem",
    borderRadius: "21px",
    backgroundColor: theme.palette.common.titlegray,
    color: theme.palette.common.lightblue,
  },
}));

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#E5E5E5",
  },
  barColorPrimary: {
    backgroundColor: "#0AB5FE;",
  },
})(LinearProgress);

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
      progress: "10",
    },
    {
      index: 1,
      date: "31st/ June /2020",
      image: biology,
      name: "Hoofdstuk 2: De cel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, velit phasellus ultricies montes augue aliquam curabitur, hendrerit sociis purus fames libero eleifend.",
      progress: "25",
    },
    {
      index: 2,
      date: "31st/ July /2020",
      image: precalculus,
      name: "Hoofdstuk 3: Calculus",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, velit phasellus ultricies montes augue aliquam curabitur, hendrerit sociis purus fames libero eleifend.",
      progress: "20",
    },
  ];

  const Chapter = chaptersData.map((lesson) => (
    <Paper className={classes.paper} square={true} key={`${lesson.index}`}>
      <Grid container direction="column">
        <Grid item>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center">
            <Grid Item>
              <Button
                className={classes.underlinebutton}
                onClick={() => {
                  setMaterial(!material);
                  setIndex(lesson.index);
                }}>
                {material && index === lesson.index ? "See less" : "See more"}
              </Button>
            </Grid>
            {/* <Grid item className={classes.smallbluetext}>
              Hoofdstuk verschuldigd voor: <br />
              {lesson.date}
            </Grid> */}
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
                  <Button variant="outlined" className={classes.roundbutton}>
                    <Typography className={classes.roundbuttontext}>
                      Check Calendar
                    </Typography>
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
                  <Typography>01/20 activities</Typography>
                  <Typography>Spaans</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  ));
  //   {material && index === lesson.index ? (
  //     <Grid container direction="column">
  //       <Grid item>
  //         <Typography className={classes.activity}>
  //           Actividades Vocabulario
  //         </Typography>
  //         <Grid item container spacing={2}>
  //           <Button
  //             variant="outlined"
  //             className={classes.roundbutton}>
  //             <Typography variant="h6">Ejercicio 1</Typography>
  //           </Button>
  //           <Button
  //             variant="outlined"
  //             className={classes.roundbutton}>
  //             <Typography variant="h6">Ejercicio 3</Typography>
  //           </Button>
  //           <Button
  //             variant="outlined"
  //             className={classes.roundbutton}>
  //             <Typography variant="h6">Ejercicio 7</Typography>
  //           </Button>
  //           <Button
  //             variant="outlined"
  //             className={classes.roundbutton}>
  //             <Typography variant="h6">Ejercicio 9</Typography>
  //           </Button>
  //           <Button
  //             variant="outlined"
  //             className={classes.roundbutton}>
  //             <Typography variant="h6">Ejercicio 10</Typography>
  //           </Button>
  //           <Button
  //             variant="outlined"
  //             className={classes.roundbutton}>
  //             <Typography variant="h6">Ejercicio 11</Typography>
  //           </Button>
  //         </Grid>

  //         <Grid item>
  //           <Typography className={classes.activity}>
  //             Actividades Gramática
  //           </Typography>
  //           <Grid item container spacing={2}>
  //             <Button
  //               variant="outlined"
  //               className={classes.roundbutton}>
  //               <Typography variant="h6">Ejercicio 1</Typography>
  //             </Button>
  //             <Button
  //               variant="outlined"
  //               className={classes.roundbutton}>
  //               <Typography variant="h6">Ejercicio 3</Typography>
  //             </Button>
  //             <Button
  //               variant="outlined"
  //               className={classes.roundbutton}>
  //               <Typography variant="h6">Ejercicio 4</Typography>
  //             </Button>
  //             <Button
  //               variant="outlined"
  //               className={classes.roundbutton}>
  //               <Typography variant="h6">Ejercicio 5</Typography>
  //             </Button>
  //             <Button
  //               variant="outlined"
  //               className={classes.roundbutton}>
  //               <Typography variant="h6">Ejercicio 6</Typography>
  //             </Button>
  //             <Button
  //               variant="outlined"
  //               className={classes.roundbutton}>
  //               <Typography variant="h6">Ejercicio 7</Typography>
  //             </Button>
  //           </Grid>
  //         </Grid>

  //         <Grid item>
  //           <Typography className={classes.activity}>
  //             Actividades Comunicación
  //           </Typography>
  //           <Grid item container spacing={2}>
  //             <Button
  //               variant="outlined"
  //               className={classes.roundbutton}>
  //               <Typography variant="h6">Ejercicio 4</Typography>
  //             </Button>
  //             <Button
  //               variant="outlined"
  //               className={classes.roundbutton}>
  //               <Typography variant="h6">Ejercicio 6</Typography>
  //             </Button>
  //             <Button
  //               variant="outlined"
  //               className={classes.roundbutton}>
  //               <Typography variant="h6">Ejercicio 8</Typography>
  //             </Button>
  //           </Grid>

  //           <Grid item>
  //             <Typography className={classes.activity}>
  //               Actividades Reflexión y evaluación
  //             </Typography>
  //             <Grid item container>
  //               <Button
  //                 variant="outlined"
  //                 className={classes.roundbutton}>
  //                 <Typography variant="h6">
  //                   Ejercicio 1
  //                 </Typography>
  //               </Button>
  //               <Button
  //                 variant="outlined"
  //                 className={classes.roundbutton}>
  //                 <Typography variant="h6">
  //                   Ejercicio 2
  //                 </Typography>
  //               </Button>
  //               <Button
  //                 variant="outlined"
  //                 className={classes.roundbutton}>
  //                 <Typography variant="h6">
  //                   Ejercicio 3
  //                 </Typography>
  //               </Button>
  //               <Button
  //                 variant="outlined"
  //                 className={classes.roundbutton}>
  //                 <Typography variant="h6">
  //                   Ejercicio 4
  //                 </Typography>
  //               </Button>
  //               <Button
  //                 variant="outlined"
  //                 className={classes.roundbutton}>
  //                 <Typography variant="h6">
  //                   Ejercicio 5
  //                 </Typography>
  //               </Button>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   ) : (
  //     <Typography variant="h6" className={classes.lessontext}>
  //       {lesson.description}
  //     </Typography>
  //   )}

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
      <Grid container>
        <Grid item md={4}>
          profile
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
