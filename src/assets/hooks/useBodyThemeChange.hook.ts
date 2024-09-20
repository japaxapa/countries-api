import { useEffect } from "react";
import { useThemeContext } from "../context/theme.contex";

export function useBodyThemeChange() {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  });
}
