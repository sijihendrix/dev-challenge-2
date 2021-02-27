import React from "react";
import { useStyles } from "./styles";
import clsx from "clsx";

interface CardProps {
  role?: string;
  image?: string;
  alt?: string;
  name?: string;
  rightContainer?: boolean;
}

export const Card: React.FC<CardProps> = ({
  role,
  image,
  alt,
  name,
  rightContainer,
}) => {
  const classes = useStyles();
  return (
    <>
      <main
        className={clsx(classes.root, rightContainer && classes.rightContainer)}
      >
        <div className={classes.container}>
          <img src={image} alt={alt} className={classes.img} />
          <span className={classes.name}>{name} </span>
        </div>
        <p className={classes.role}>{role} </p>
      </main>
    </>
  );
};
