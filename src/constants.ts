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
