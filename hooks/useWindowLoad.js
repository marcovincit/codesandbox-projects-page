import { useState, useEffect } from "react";

export const useWindowLoad = () => {
  const [windowIsLoaded, setWindowIsLoaded] = useState(false);

  useEffect(() => {
    function handleLoaded() {
      setTimeout(() => {
        setWindowIsLoaded(true);
      }, 1000);
    }

    window.addEventListener("load", handleLoaded);
    return () => window.removeEventListener("load", handleLoaded);
  }, []);
  return windowIsLoaded;
};
