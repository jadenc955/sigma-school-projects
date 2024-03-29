import { useState } from "react";
import "./App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleDarkTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className={isDarkTheme ? "dark" : ""} id="parent-container">
      <div id="container">
        <h1>Theme Switcher</h1>
        <p>{isDarkTheme ? "Dark" : "Light"} Theme</p>

        <div className="switch-container">
          <input type="checkbox" name="switch" id="switch" onClick={toggleDarkTheme}/>
          <label htmlFor="switch"></label>
        </div>

        {/* <button onClick={toggleDarkTheme}>Toggle Theme</button> */}
      </div>
    </div>
  );
}

export default App;
