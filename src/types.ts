import { StaticImageData } from "next/image";

export enum HomeType {
  poolHouse = "poolHouse",
  meadowView = "meadowView",
  farmHouse = "farmHouse",
  four = "four",
}

export interface Home {
  name: HomeType;
  thumbnailImage: Image;
  thumbnailCaption: string;
  coverImageArray?: Image[];
  imageArray?: Image[];
  footerImage?: Image;
  topText?: string;
  textRight?: string;
  textLeft?: string;
}

export interface Image {
  image: StaticImageData;
  altText: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
