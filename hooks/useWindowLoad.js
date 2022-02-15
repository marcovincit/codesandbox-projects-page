import { useState, useEffect } from "react";

export const useWindowLoad = () => {
  const [windowIsLoaded, setWindowIsLoaded] = useState(false);

  useEffect(() => {
    function handleLoaded() {
      setWindowIsLoaded(true);
    }

    window.addEventListener("load", handleLoaded);
    return () => window.removeEventListener("load", handleLoaded);
  }, []);
  return windowIsLoaded;
};
