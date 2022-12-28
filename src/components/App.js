import React, {useState, useEffect} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
// import Actors from "./Actors";
// import Directors from "./Directors";
import Snakegame from "./Snakegame";
import Breakout from "./Breakout"
import Hiscores from "./Hiscores"
// import Hiscores from "./Hiscores";
// import Home from "./Home"
// import Login from "./Login";


function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  //making toggle button Light / Dark Mode 
  const onToggleDarkMode = () => {
      setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  //setting up POST 

  const [retroGames, setRetroGames] = useState([])

  const handleNewGame = (shinyGame) => {
    setRetroGames([...retroGames, shinyGame])
  }

  return (
    
    <BrowserRouter> 
      <div> {/* div element starting */}
        <NavBar onToggleDarkMode = {onToggleDarkMode} isDarkMode = {isDarkMode} /> 
      </div>

      <div> 
        <Switch> 
          <Route path = "/snakegame">
              <Snakegame handleNewGame = {handleNewGame}/>
          </Route>
          <Route path = "/breakout">
              <Breakout />
          </Route>
          <Route path = "/hiscores">
              <Hiscores />
          </Route>
          <Route exact path = "/">
              <Home />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
    )
}

export default App;
