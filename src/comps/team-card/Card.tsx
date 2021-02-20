import React from "react";
import { useStyles } from "./styles";

interface CardProps {
  role?: string;
  image?: string;
  alt?: string;
  name?: string;
}

export const Card: React.FC<CardProps> = ({ role, image, alt, name }) => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.root}>
        <div className={classes.container}>
          <img src={image} alt={alt} className={classes.img} />
          <span className={classes.name}>{name} </span>
        </div>
        <p className={classes.role}>{role} </p>
      </main>
    </>
  );
};
