import React from "react";

const Boxes = ({ items = 6 }) => {
  const boxArr = [];
  for (let i = 0; i < items; i++) {
    boxArr.push("box");
  }

  return (
    <div className="box-container">
      {boxArr.map((box, index) => (
        <div className={box} key={index}></div>
      ))}
    </div>
  );
};

export default Boxes;
