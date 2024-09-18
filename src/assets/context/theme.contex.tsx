import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

enum ThemeType {
  light = "light",
  dark = "dark",
}

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a CartProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.light);

  const toggleTheme = () => {
    const newTheme =
      theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") === ThemeType.light
        ? ThemeType.light
        : ThemeType.dark;
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
