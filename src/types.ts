import { StaticImageData } from "next/image";

export enum HomeType {
  guestBarn = "guestBarn",
  meadowView = "meadowView",
  farmHouse = "farmHouse",
  owlsNest = "owl'sNest",
  splitRock = "splitRock",
  lostQuarry = "lostQuarry",
}


export interface Home {
  name: HomeType;
  thumbnailImage: Image;
  thumbnailCaption: string[];
  coverImageArray?: Image[];
  imageArray?: Image[];
  footerImage?: Image;
  topText?: string | string[];
  creditTextArray?: string[];
  textRight?: string | string[];
  textLeft?: string | string[];
}

export interface Image {
  image: StaticImageData;
  altText: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
