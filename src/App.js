import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [score, setScore] = useState(0);

  function onBoxClick() {
    setScore(score + 1);
  }
  return (
    <div className="container">
      <Navbar score={score} />
      <Main onBoxClick={onBoxClick} />
    </div>
  );
}

export default App;
