import { createMuiTheme } from "@material-ui/core/styles";

const Blue = "#2176a7";
const LightBlue = "#0ab5fe";
const DarkBlue = "#1A5E86";
const Green = "#21c3b5";
const White = "#ffffff";
const ChapterText = "#666A6A";
const Black = "rgba(0, 0, 0, 0.5)";
const TitleGray = "#C4C4C4";

const BannerBlue =
  "linear-gradient(136.88deg, #2176A7 41.34%, #0AB5FE 102.25%)";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${Blue}`,
      lightblue: `${LightBlue}`,
      darkblue: `${DarkBlue}`,
      green: `${Green}`,
      white: `${White}`,
      bannerblue: `${BannerBlue}`,
      black: `${Black}`,
      chaptertext: `${ChapterText}`,
      titlegray: `${TitleGray}`,
    },
    primary: { main: `${Blue}` },
    secondary: { main: `${White}` },
    error: { main: `${LightBlue}` },
  },
  typography: {
    h3: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "27px",
      lineHeight: "38px",
    },
    h4: {
      fontFamily: "Poppins",
      fontSize: "22px",
      lineHeight: "33px",
    },
    h5: {
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "30px",
    },
    h6: {
      fontFamily: "Roboto",
      fontWeight: "300",
      fontSize: "18px",
      lineHeight: "21px",
    },
    tab: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "400",
      textTransform: "none",
      color: "white",
    },
    textDescription: {
      padding: "3rem 0 0 5rem",
    },
    roundbutton: {
      border: `1px solid ${LightBlue}`,
      borderRadius: "40px",
      backgroundColor: `${White}`,
      padding: "4px 16px",
      color: `${LightBlue}`,
      textTransform: "none",
      "&:hover": {
        color: `${White}`,
        backgroundColor: `${LightBlue}`,
      },
    },
    bluebutton: {
      background: `${LightBlue}`,
      "&:hover": { background: `${LightBlue}` },
      borderRadius: "3px",
      textTransform: "none",
      color: `${White}`,
    },
    smallbluetext: {
      fontFamily: "Poppins",
      fontSize: "10px",
      lineHeight: "15px",
      color: `${LightBlue}`,
      textAlign: "right",
    },
  },
});
