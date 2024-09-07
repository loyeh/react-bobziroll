import React, { useEffect, useState } from "react";

const Boxes = ({ items = 6, onBoxClick = () => {} }) => {
  const [boxGame, setBoxGame] = useState(Array(items).fill(0));
  const [startGame, setStartGame] = useState(false);

  function boxRandomChooser() {
    const index = Math.trunc(Math.random() * items);
    console.log(index);
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
      {!startGame && (
        <div className="startBtn-container">
          <button className="startBtn" onClick={() => setStartGame(true)}>
            START
          </button>
        </div>
      )}
      {startGame &&
        boxGame.map((box, index) => (
          <div
            key={index}
            className={box === 1 ? "box filled" : "box"}
            onClick={box === 1 ? boxClickHandler : null}
          ></div>
        ))}
    </div>
  );
};

export default Boxes;
