import React from "react";
import { useStyles } from "./styles";

export const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <h1 className={classes.header}>The creative crew</h1>
      <div className={classes.container}>
        <h3 className={classes.who}>Who we are</h3>
        <p className={classes.about}>
          We are team of creatively diverse. driven. innovative individuals
          working in various locations from the world.
        </p>
      </div>
    </section>
  );
};
