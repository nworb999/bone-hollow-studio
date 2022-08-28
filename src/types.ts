import { StaticImageData } from "next/image";

export enum HomeType {
  poolHouse = "poolHouse",
  oneEightOne = "oneEightOne",
}

export interface Home {
  name: HomeType;
  thumbnailImage: Image;
  thumbnailCaption: string;
  coverImage: Image;
  imageArray: Image[];
  footerImage: Image;
}

export interface Image {
  image: StaticImageData;
  altText: string;
}
