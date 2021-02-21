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
}

export const data: dataProps[] = [
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
    middleContainer: true,
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
    middleContainer: true,
  },

  {
    role: "Developer",
    alt: "Stan John",
    name: "Stan John ",
    image: Stan,
  },
];
