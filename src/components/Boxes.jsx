import React, { useEffect, useState } from "react";

const Boxes = ({
  items = 6,
  onBoxClick = () => {},
  resetScore = () => {},
  score = 0,
}) => {
  const [boxGame, setBoxGame] = useState(Array(items).fill(0));
  const [gameTimes, setGameTimes] = useState({
    start: false,
    end: false,
  });

  function startGame() {
    resetScore();
    setGameTimes({ start: true, end: false });
    setTimeout(() => {
      setGameTimes({ start: false, end: true });
    }, 30000);
  }

  function boxRandomChooser() {
    const index = Math.trunc(Math.random() * items);
    setBoxGame(() => {
      const newBoxArray = Array(items).fill(0);
      newBoxArray[index] = 1;
      return newBoxArray;
    });
  }

  function boxClickHandler(target) {
    onBoxClick(target);
    setTimeout(boxRandomChooser, 330);
  }

  useEffect(() => {
    const timeOfBoxChange = Math.trunc(Math.random() * 1000) + 2000;
    const timeout = setTimeout(boxRandomChooser, timeOfBoxChange);
    console.log(timeOfBoxChange);
    return () => {
      clearTimeout(timeout);
    };
  }, [boxGame]);

  return (
    <div className="box-container">
      {!gameTimes.start && !gameTimes.end && (
        <div className="startBtn-container">
          <button className="startBtn" onClick={startGame}>
            START
          </button>
        </div>
      )}
      {gameTimes.start &&
        !gameTimes.end &&
        boxGame.map((box, index) => (
          <div
            key={index}
            className={box === 1 ? "box filled" : "box"}
            onClick={box === 1 ? boxClickHandler : null}
          ></div>
        ))}
      {!gameTimes.start && gameTimes.end && (
        <div className="startBtn-container">
          <h1>Your Score is: {score}</h1>
          <button className="startBtn" onClick={startGame}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Boxes;
