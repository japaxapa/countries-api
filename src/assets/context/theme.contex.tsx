import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT);

  const toggleTheme = () => {
    const newTheme =
      theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") === ThemeType.LIGHT
        ? ThemeType.LIGHT
        : ThemeType.DARK;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
