import React from "react";
import { Card } from "../../comps/team-card/Card";
import { useStyles } from "./styles";

import Saba from "../../assests/photo2.png";

export const Team = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Card
        role="Art director"
        alt="Saba Cabrera"
        name="Saba Cabrera"
        image={Saba}
      />
    </section>
  );
};
