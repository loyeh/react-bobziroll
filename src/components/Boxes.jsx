import React, { useEffect, useState } from "react";

const Boxes = ({ items = 6, onBoxClick = () => {} }) => {
  const [boxGame, setBoxGame] = useState(Array(items).fill(0));
  useEffect(() => {
    setTimeout(() => {
      const index = Math.trunc(Math.random() * items);
      console.log(index);
      setBoxGame(() => {
        const newBoxArray = Array(items).fill(0);
        newBoxArray[index] = 1;
        return newBoxArray;
      });
      console.log(boxGame);
    }, 2000);
  }, [boxGame]);
  return (
    <div className="box-container">
      {boxGame.map((box, index) => (
        <div
          key={index}
          className={box === 1 ? "box filled" : "box"}
          onClick={box === 1 ? onBoxClick : null}
        ></div>
      ))}
    </div>
  );
};

export default Boxes;
