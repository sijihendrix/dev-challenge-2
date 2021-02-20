import React from "react";
import { Card } from "../../comps/team-card/Card";
import { useStyles } from "./styles";

import Saba from "../../assests/photo2.png";
import Bill from "../../assests/photo1.png";
import Shae from "../../assests/photo3.png";
import Griff from "../../assests/photo5.png";
import Skylar from "../../assests/photo4.png";
import Stan from "../../assests/photo6.png";

interface dataProps {
  role?: string;
  image?: string;
  alt?: string;
  name?: string;
}

const data: dataProps[] = [
  {
    role: "Art director",
    alt: "Bill Mahoney",
    name: "Bill Mahoney",
    image: Bill,
  },
  {
    role: "Product owner",
    alt: "Saba Cabrera",
    name: "Saba Cabrera",
    image: Skylar,
  },
  {
    role: "UX Designer",
    alt: "Skylah Lu ",
    name: "Skylah Lu",
    image: Saba,
  },
  {
    role: "Developer",
    alt: "Griff Richards ",
    name: "Griff Richards",
    image: Griff,
  },
  {
    role: "Tech Lead ",
    alt: "Shae Le ",
    name: "Shae Le",
    image: Shae,
  },

  {
    role: "Developer",
    alt: "Stan John",
    name: "Stan John ",
    image: Stan,
  },
];

export const Team = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      {data.map(({ role, alt, image, name }, index) => (
        <div key={index}>
          <Card role={role} alt={alt} name={name} image={image} />
        </div>
      ))}
    </section>
  );
};
