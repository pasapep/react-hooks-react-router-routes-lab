import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar({onToggleDarkMode, isDarkMode}) {

  const textButton = isDarkMode ? "Light Mode" : "Dark Mode";
  

  return (
    <div>
      {/* <Navbar  > */}
      <Navbar style = {{background : "black"}}>
        <Container> 
          <Navbar.Brand href = "/"> Home</Navbar.Brand>
          <Nav className = "justify-content-center mr-auto">
            {/* <Nav.Link href = "/" style = {isDarkMode ? {background : "black", color:"red"} : {background: "white", color : "yellow"}}>
              Home</Nav.Link>
            <Nav.Link href = "/snakegame" style = {isDarkMode ? {background : "black", color:"red"} : {background: "white", color : "yellow"}}>
              Snake Game</Nav.Link>
            <Nav.Link href = "/breakout" style = {isDarkMode ? {background : "black", color:"red"} : {background: "white", color : "yellow"}}>
              Break Out </Nav.Link>
            <Nav.Link href = "/hiscores" style = {isDarkMode ? {background : "black", color:"red"} : {background: "white", color : "yellow"}}>
              High-Score </Nav.Link>  
            <Nav.Link href = "/login" style = {isDarkMode ? {background : "black", color:"red"} : {background: "white", color : "yellow"}}>
              Login </Nav.Link> */}
            <Nav.Link href = "/" style = {{ color: "yellow"}}>Home</Nav.Link>
            <Nav.Link href = "/snakegame" style = {{ color: "yellow"}}>Snake Game</Nav.Link>
            <Nav.Link href = "/breakout" style = {{ color: "yellow"}}>Break Out </Nav.Link>
            <Nav.Link href = "/hiscores" style = {{ color: "yellow"}}>High-Score </Nav.Link>  
            <Nav.Link href = "/login" style = {{ color: "yellow"}}>Login </Nav.Link>
          </Nav>
        <button onClick = {onToggleDarkMode}>{textButton} </button>
        </Container>
      </Navbar>


    </div>
  )
}

export default NavBar;
