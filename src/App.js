import { createContext, useState } from "react";
import Quote from "./Quote";
import ReactSwitch from "react-switch";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div className="App" id={theme}>
        <div className="container">
          <div className="toggle-bar">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <Quote />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
