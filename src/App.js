import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [score, setScore] = useState(0);

  function resetScore() {
    setScore(0);
  }

  function onBoxClick(event) {
    if (event.target.classList.contains("clicked")) {
      return;
    }
    event.target.classList.add("clicked");
    setScore((oldScore) => oldScore + 1);
  }
  return (
    <div className="container">
      <Navbar score={score} />
      <Main onBoxClick={onBoxClick} score={score} resetScore={resetScore} />
    </div>
  );
}

export default App;
