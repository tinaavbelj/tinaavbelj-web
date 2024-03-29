import imageIcons from "../images/icons-cover-06.png";
import imageIconsMobile from "../images/cover-icons-mobile-high2.png";

import imageFoodspace from "../images/cover-foodspace.png";
import imageFoodspaceMobile from "../images/cover-foodspace-mobile.png";

import imageShelters from "../images/shelters/cover-shelters.png";
import imageSheltersMobile from "../images/shelters/cover-shelters-mobile.png";

const content = [
  {
    id: 0,
    image: imageIcons,
    imageMobile: imageIconsMobile,
    text: {
      title: "Icons",
      type: "design | website",
      description:
        "A collection of editable svg icons that can be downloaded from the website",
    },
  },
  {
    id: 1,
    image: imageFoodspace,
    imageMobile: imageFoodspaceMobile,
    text: {
      title: "Foodspace",
      type: "UI design",
      description: "A mobile app that enables businesses to sell surplus food",
    },
  },
  {
    id: 2,
    image: imageShelters,
    imageMobile: imageSheltersMobile,
    text: {
      title: "Animal Shelters Platform",
      type: "UI design",
      description:
        "A platform that contains information from all animal shelters",
    },
  },
];

export default content;
