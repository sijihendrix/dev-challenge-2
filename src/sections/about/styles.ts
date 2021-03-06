import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5% 1.5%",
    width: "68%",
    margin: "auto",
    background: "#FAFAFA",
    maxWidth: "920px",
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
    fontSize: "1.8rem",
    lineHeight: "20px",
    textTransform: "uppercase",
    margin: "0",
    width: "40%",
    paddingBottom: "2.5%",
  },
  about: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.7rem",
    lineHeight: "27px",
    margin: "0",
    width: "100%",
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
      fontSize: "4.5rem",
    },
    container: {
      width: "100%",
      paddingTop: "10%",
    },
    who: {
      width: "100%",
      fontSize: "2.2rem",
    },
    about: {
      width: "95%",
      fontSize: "1.8rem",
    },
  },
});
