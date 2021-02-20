import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    width: "40%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "fit-content",
  },
  img: {
    height: "auto",
    width: "25rem",
  },
  name: {
    fontFamily: "Poppis",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#000000",
    width: "100%",
    textAlign: "left",
    paddingTop: "5%",
  },
  role: {
    fontFamily: "PT Serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    textTransform: "uppercase",
    color: "#000000",
    alignSelf: "flex-start",
    margin: "0",

    writingMode: "vertical-rl",
  },
});
