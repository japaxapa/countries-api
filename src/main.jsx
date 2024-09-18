import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CountriesProvider } from "./assets/context/contries.contex.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </StrictMode>
);
