import React from "react";
import Counter from "./components/Counter";
import TweetInput from "./components/TweetInput";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";
function App() {
  return (
    <div>
      <h1>React Practical 3</h1>
      <Counter />
      <TweetInput />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
