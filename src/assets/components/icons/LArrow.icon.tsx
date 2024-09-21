import React from "react";
import { dark, darkOff, light, lightOff } from "../../constants/colors";
import { useThemeContext } from "../../context/theme.contex";

const LArrowComponent = () => {
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
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};

export default LArrowComponent;
