import React from "react";
// import { movies } from "../data";
import Enterscore from "./Enterscore"
import Gamereview from "./Gamereview"
import Review from "./Review"
// import Enterhighscore from "./Enterhighscore";

function Breakout() {
  return (
    <div>
    <h2> Breakout</h2>
    <Enterscore />
    <Gamereview />
    <Review />
    {/* <Enterhighscore /> */}
    </div>
    )
}

export default Breakout;