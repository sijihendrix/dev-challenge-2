import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    width: "68%",
    flexWrap: "wrap",
    margin: "0 auto",
    justifyContent: "space-between",
    paddingTop: "5%",
    maxWidth: "920px",
  },
  container: {
    paddingBottom: "15%",
  },
  middleContainer: {
    paddingTop: "10%",
  },
  "@media (max-width: 504px)": {
    root: {},
  },
});
