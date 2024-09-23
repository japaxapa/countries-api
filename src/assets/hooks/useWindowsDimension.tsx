import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [num, setNum] = useState(10);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setNum(250);
      } else {
        setNum(10);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return num;
};

export default useWindowDimensions;
