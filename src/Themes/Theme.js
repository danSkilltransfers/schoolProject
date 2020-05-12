import { createMuiTheme } from "@material-ui/core/styles";

export const Blue = "#2176a7";
export const LightBlue = "#0ab5fe";
export const DarkBlue = "#1A5E86";
export const Green = "#21c3b5";
export const White = "#ffffff";
export const ChapterText = "#666A6A";
export const Black = "rgba(0, 0, 0, 0.5)";
export const TitleGray = "#C4C4C4";


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
  },
});
