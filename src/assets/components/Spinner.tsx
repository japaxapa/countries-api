import React from "react";
import "./Spinner.styles.css";
import { useThemeContext } from "../context/theme.contex";

export function Spinner() {
  const { theme } = useThemeContext();
  return (
    <div className={`loader__${theme === "light" ? "light" : "dark"}`}></div>
  );
}
