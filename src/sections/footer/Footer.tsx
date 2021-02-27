import React from "react";
import { useStyles } from "./styles";

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <span className={classes.span}>Created by Siji Bamgboye</span>
    </footer>
  );
};
