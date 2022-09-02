import { HomeType } from "./types";

export const formatName = ({ name }: { name?: HomeType }) => {
  if (name) {
    const result = name.replace(/([A-Z])/g, " $1");
    return result.charAt(0) + result.slice(1).toLowerCase();
  } else return "";
};
