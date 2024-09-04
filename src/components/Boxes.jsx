import React, { useEffect, useState } from "react";

const Boxes = ({ items = 6, onBoxClick = () => {} }) => {
  const [boxGame, setBoxGame] = useState([Array(items).fill(0)]);
  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const index = Math.trunc(Math.random() * items);
      console.log(index);
      const oldBox = Array(items).fill(0);
      oldBox[index] = 1;
      setBoxGame(oldBox);
      setState(!state);
    }, 2000);
  }, [state]);

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
