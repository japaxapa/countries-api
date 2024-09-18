import React, { useEffect } from "react";
import { useThemeContext } from "../context/theme.contex.tsx";
import "./NavigationBar.styles.css";

export function NavigationBar() {
  const { theme, toggleTheme } = useThemeContext();
  const url = `/icons/${theme == "light" ? "moon" : "sun"}.svg`;

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <div>
        <button className={`where__btn ${theme}`}>Where in the world?</button>
      </div>
      <div>
        <button onClick={toggleTheme} className={`theme__btn ${theme}`}>
          <img
            src={url}
            alt={`${theme === "light" ? "moon" : "sun"} icon`}
            className={`${theme}`}
          />
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}
