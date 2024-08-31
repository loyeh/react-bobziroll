import React from "react";
import Boxes from "./Boxes";

const Main = () => {
  
  return (
    <div className="game-container">
      <h1>Click on the hilighted box!!</h1>
      <Boxes items={9} />
    </div>
  );
};

export default Main;
