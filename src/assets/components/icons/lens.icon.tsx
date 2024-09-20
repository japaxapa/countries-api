import React from "react";
import { dark, darkOff, light, lightOff } from "../../constants/colors";
import { useThemeContext } from "../../context/theme.contex";

const LensComponent = () => {
  const { theme } = useThemeContext();

  const fillColor = theme === "light" ? light : darkOff;
  const strokeColor = theme === "light" ? dark : lightOff;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={strokeColor}
      className="size-6"
      style={{ width: "20px" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

export default LensComponent;
