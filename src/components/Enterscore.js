import React from "react";
import './Styles.css';
import {Form, Button} from 'react-bootstrap'
// import Gamereview from "./Gamereview";
// import Enterhighscore from "./Enterhighscore";


function Enterscore() {
  return (
    <div> 
        <h1> Enter Score</h1>
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Account
            </Button>
        </Form>

    </div>
  

    )
}

export default Enterscore;
