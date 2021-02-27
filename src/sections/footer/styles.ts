import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    padding: "2%",
  },
  span: {
    width: "287px",

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.5rem",
    lineHeight: "17px",
    textAlign: "center",

    color: "#A9A9A9",
  },
  "@media (max-width: 504px)": {
    root: {},
  },
});
