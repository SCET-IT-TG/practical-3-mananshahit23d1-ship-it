import React, { useState } from "react";

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const style = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    padding: "20px",
    textAlign: "center"
  };

  return (
    <div style={style}>
      <h3>Theme Switcher</h3>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
