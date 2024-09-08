import React from "react";
import Boxes from "./Boxes";

const Main = (props) => {
  return (
    <div className="game-container">
      <h1>Click on the hilighted box!!</h1>
      <Boxes
        items={9}
        onBoxClick={props.onBoxClick}
        resetScore={props.resetScore}
        score={props.score}
      />
    </div>
  );
};

export default Main;
