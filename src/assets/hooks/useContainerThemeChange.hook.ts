import { useEffect } from "react";
import { useThemeContext } from "../context/theme.contex";

export function useContainerThemeChange(id: string) {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "light") {
      document.getElementById(id)?.classList.add("light-off");
      document.getElementById(id)?.classList.remove("dark-off");
    } else {
      document.getElementById(id)?.classList.add("dark-off");
      document.getElementById(id)?.classList.remove("light-off");
    }
  });
}
