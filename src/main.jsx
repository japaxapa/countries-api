import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./assets/context/theme.contex.tsx";
import { CountriesProvider } from "./assets/context/countries.context.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </ThemeProvider>
  </StrictMode>
);
