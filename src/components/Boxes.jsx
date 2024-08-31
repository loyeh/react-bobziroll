import React, { useEffect, useState } from "react";

const Boxes = ({ items = 6, onBoxClick = () => {} }) => {
  const boxArr = [];
  for (let i = 0; i < items; i++) {
    boxArr.push(0);
  }
  const [boxGame, setBoxGame] = useState(boxArr);

  useEffect(() => {
    setTimeout(() => {
      const index = Math.trunc(Math.random() * boxGame.length);
      console.log(index);
      boxArr[index] = 1;
      setBoxGame(boxArr);
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
