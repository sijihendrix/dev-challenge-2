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
  middleContainer?: boolean;
  rightContainer?: boolean;
  bottomRightContainer?: boolean;
}

export const data: dataProps[] = [
  {
    role: "Product owner",
    alt: "Bill Mahoney",
    name: "Bill Mahoney",
    image: Bill,
  },
  {
    role: "Art director",
    alt: "Saba Cabrera",
    name: "Saba Cabrera",
    middleContainer: true,
    image: Saba,
    rightContainer: true,
  },
  {
    role: "Tech Lead ",
    alt: "Shae Le ",
    name: "Shae Le",
    image: Shae,
  },
  {
    role: "UX Designer",
    alt: "Skylah Lu ",
    name: "Skylah Lu",
    image: Skylar,
    rightContainer: true,
  },
  {
    role: "Developer",
    alt: "Griff Richards ",
    name: "Griff Richards",
    image: Griff,
    middleContainer: true,
  },

  {
    role: "Developer",
    alt: "Stan John",
    name: "Stan John ",
    image: Stan,
    rightContainer: true,
  },
];
