import React, { useEffect, useRef, useState } from "react";

const Boxes = ({ items = 6, onBoxClick = () => {} }) => {
  const boxGame = useRef(Array(items).fill(0));
  const [boxChanged, setBoxChanged] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const index = Math.trunc(Math.random() * items);
      console.log(boxGame);
      boxGame.current = Array(items).fill(0);
      boxGame.current[index] = 1;
      setBoxChanged(!boxChanged);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [boxChanged]);

  return (
    <div className="box-container">
      {boxGame.current.map((box, index) => (
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
