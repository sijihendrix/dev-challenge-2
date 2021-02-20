import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5% 1.5%",
    width: "70%",
    margin: "auto",
    background: "#FAFAFA",
  },
  header: {
    margin: "0",
    fontSize: "3.4rem",
    lineHeight: "48px",
    fontStyle: "normal",
    fontWeight: "Bold",
    letterSpacing: "-0.045em",
    width: "30%",
    textAlign: "left",
    fontFamily: "'PT Serif', serif",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    width: "45%",
    fontFamily: "'Poppins', sans-serif",
  },
  who: {
    fontStyle: "bold",
    fontWeight: "800",
    fontSize: "2rem",
    lineHeight: "27px",
    textTransform: "uppercase",
    margin: "0",
    width: "40%",
    paddingBottom: "2.5%",
  },
  about: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.6rem",
    lineHeight: "27px",
    margin: "0",
    width: "85%",
  },
  "@media (max-width: 504px)": {
    root: {
      flexDirection: "column",
      padding: "10% 0",
      margin: "0",
      width: "100%",
    },

    header: {
      width: "100%",
    },
    container: {
      width: "100%",
      paddingTop: "10%",
    },
    who: {
      width: "100%",
    },
    about: {
      width: "80%",
    },
  },
});
