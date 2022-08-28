import { Home, HomeType, Image } from "./types";
import {
  aerial,
  spring1,
  spring2,
  fall,
  chairs,
  entrance,
  front,
  hall,
  mirror,
  door,
} from "./images";

export const homesArray: Home[] = [
  {
    name: HomeType.poolHouse,
    thumbnailImage: { image: aerial, altText: "placeholder" },
    thumbnailCaption: "Meadow View",
    coverImage: { image: aerial, altText: "placeholder" },
    imageArray: [
      { image: spring1, altText: "placeholder" },
      { image: spring2, altText: "placeholder" },
    ],
    footerImage: { image: fall, altText: "placeholder" },
  },
  {
    name: HomeType.oneEightOne,
    coverImage: { image: entrance, altText: "placeholder" },
    thumbnailImage: { image: entrance, altText: "placeholder" },
    thumbnailCaption: "Guest Barn",
    imageArray: [
      { image: front, altText: "placeholder" },
      { image: hall, altText: "placeholder" },
    ],
    footerImage: { image: mirror, altText: "placeholder" },
  },
];

export const aboutImageArray: Image[] = [
  { image: chairs, altText: "chairs" },
  { image: door, altText: "door" },
];

export const aboutTextArray: string[] = [
  `At Bone Hollow Studio we specialize in curated and welcoming
    homes. Through our partnership with renowned local builder,
    Hudson Valley Homes & Renovations, we offer clean and gracious
    motifs that are thoughtfully sited in a quiet, introspective
    setting.`,
  `Erika grew up in Berlin, Germany and the American Midwest. A
    graduate of Northwestern University, she has over 15 years of
    experience in producing commercials and special effects for an
    illustrious client base, amongst them Nike, Coca-Cola,
    McDonald's, Chevrolet, and Anheuser Busch. Erika has also
    worked in development and event planning for non-profits,
    including Jersey Battered Women's Service.
    

    Erika's latest work with the New York-based interior
    designer, Amanda Rehbein Studio, has segued into the creation of
    her company, Bone Hollow Studio. With a background in
    advertising production and styling, Erika combines her passion
    for creative design with a natural aptitude for project
    management. She believes one
    s home should be unique,
    reflecting a deeply personal connection with the land.
    Erika's goal is to create spaces that are at once impactful
    and livable, timeless and comfortable.`,
];
