import React from "react";
import Gamereview from "./Gamereview";
import Enterscore from "./Enterscore";
import Review from "./Review"

function Snakegame({handleNewGame}) {
  return (
    <div>
      <h1> snakegame </h1>
      <Enterscore />
      <Review handleNewGame = {handleNewGame} />
    </div>

    )
}

export default Snakegame;
