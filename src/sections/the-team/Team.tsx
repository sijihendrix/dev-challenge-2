import React from "react";
import { Card } from "../../comps/team-card/Card";
import { useStyles } from "./styles";
import clsx from "clsx";

import { data } from "./data";
import { runInContext } from "vm";

export const Team = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      {data.map(
        (
          { role, alt, image, name, middleContainer, rightContainer },
          index
        ) => (
          <div
            key={index}
            className={clsx(
              classes.container,
              middleContainer && classes.middleContainer
            )}
          >
            <Card
              role={role}
              alt={alt}
              name={name}
              image={image}
              rightContainer={rightContainer}
            />
          </div>
        )
      )}
    </section>
  );
};
