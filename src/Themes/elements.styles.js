import { withStyles } from "@material-ui/core/styles";
import { Button, LinearProgress, Typography } from "@material-ui/core";

import {
  Blue,
  LightBlue,
  // DarkBlue,
  // Green,
  White,
  // ChapterText,
  // Black,
  TitleGray,
  ProgressGray,
} from "./theme";

//profil page
export const BlueRoundButton = withStyles({
  root: {
    border: `1px solid ${LightBlue}`,
    borderRadius: "40px",
    backgroundColor: `${White}`,
    padding: "2px 8px",
    color: `${LightBlue}`,
    textTransform: "none",
    margin: ".5rem",
    fontWeight: "300",
    "&:hover": {
      color: `${White}`,
      backgroundColor: ` ${LightBlue}`,
    },
    "&:active": {
      color: `${White}`,
      backgroundColor: `${LightBlue}`,
    },
  },
})(Button);
export const SmallBlueText = withStyles({
  root: {
    fontFamily: "Poppins",
    fontSize: "10px",
    lineHeight: "15px",
    color: `${LightBlue}`,
    textAlign: "right",
    margin:".5rem",
    textDecoration: "underline",
  },
})(Typography);

export const GrayButton = withStyles({
  root: {
    background: `${TitleGray}`,
    color: `${White}`,
    margin: ".5rem .5rem  0 0",
    textTransform: "none",
    width: "8rem",

    "&:hover": {
      color: `${White}`,
      backgroundColor: ` ${LightBlue}`,
    },
    "&:active": {
      color: `${White}`,
      backgroundColor: `${LightBlue}`,
    },
  },
})(Button);

export const CalendarButton = withStyles({
  root: {
    borderRadius: "17px",
    borderColor: `${Blue}`,
    height: "16px",
    width: "104px",
    padding: 0,
    fontSize: "8px",
    color: "white",
    textDecoration: "underline",
    backgroundColor: `${Blue}`,
    "&:hover": { backgroundColor: `${Blue}` },
  },
})(Button);

export const ColorLinearProgress = withStyles({
  root: {
    height: "10px",
    maxWidth: "30rem",
    borderRadius: "21px",
  },
  colorPrimary: {
    backgroundColor: `${ProgressGray}`,
  },
  barColorPrimary: {
    backgroundColor: `${LightBlue}`,
  },
})(LinearProgress);

//spanns page
export const BigBlueRoundButton = withStyles({
  root: {
    padding: "4px 16px",
    fontSize: "18px",
    lineHeight: "21px",
  },
})(BlueRoundButton);
export const BlueButton = withStyles({
  root: {
    background: `${LightBlue}`,
    "&:hover": { background: `${TitleGray}` },
    borderRadius: "3px",
    textTransform: "none",
    color: `${White}`,
    width: "8rem",
  },
})(Button);

//header

export const BigBlueButton = withStyles({
  root: {
    background: `${LightBlue}`,
    "&:hover": { background: `${LightBlue}` },
    borderRadius: "3px",
    textTransform: "none",
    color: `${White}`,
    width: "10rem",
    height: "4rem",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "20px",
  },
})(Button);
