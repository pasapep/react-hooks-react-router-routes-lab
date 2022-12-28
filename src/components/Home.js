import React from "react";
import styled from 'styled-components';

function Home() {

  //adding styles 

  return (
    <div className = "main-container"> 
        <div className ="left-container">
            <p>Left-Container </p>
        </div> {/*ending left container*/}
        <div className ="right-container">
            <p> Snake Game </p>
            <p> // render snakegame review here </p>
            <p> // render snakegame likes here</p>
            <p> Breakout Game</p>         
            <p> // render breakout reviews here </p>
            <p> // render breakout likes here </p>     
        </div>

    </div>

  )
  }

export default Home;
