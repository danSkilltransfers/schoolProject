import { withStyles } from "@material-ui/core/styles";
import { Button, LinearProgress } from "@material-ui/core";

import {
  Blue,
  LightBlue,
  DarkBlue,
  Green,
  White,
  ChapterText,
  Black,
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
