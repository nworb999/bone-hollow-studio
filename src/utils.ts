import { HomeType } from "./types";
import { useEffect, useState } from "react";

export const formatName = ({ name }: { name?: HomeType }) => {
  if (name) {
    const result = name.replace(/([A-Z])/g, " $1");
    return result.charAt(0) + result.slice(1).toLowerCase();
  } else return "";
};

interface SetWindowSizeProps {
  width: undefined | number;
  height: undefined | number;
}

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<SetWindowSizeProps>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // only execute all the code below in client side
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== "undefined") {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
