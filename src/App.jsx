import "./App.css";
import { Home } from "./assets/components/Home";
import { NavigationBar } from "./assets/components/NavigationBar";
import { useBodyThemeChange } from "./assets/hooks/useBodyThemeChange.hook";

function App() {
  useBodyThemeChange();

  return (
    <>
      <NavigationBar />
      <Home />
    </>
  );
}

export default App;
