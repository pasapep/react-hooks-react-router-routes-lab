import React, {useState, useEffect}  from "react";
import './Styles.css';
import { Form, FormControl, FormGroup, Radio, Button } from 'react-bootstrap';



function Gamereview() {

  const [game, setGame] = useState('');
  const [description, setDescription] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let newReview = {
  //     review: review,
  //     gametype : gametype,
  //   }

  // }


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // submit the form
  // };

  return (
    <div>
        <h1> Render Game Review </h1>
        <div> 






        {/* <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Select a game:</Form.Label>
            <Form.Check
              type="radio"
              label="Snakegame"
              name="game"
              value="snakegame"
              checked={game === "snakegame"}
              onChange={(event) => setGame(event.target.value)}
            />
            <Form.Check
              type="radio"
              label="Breakout"
              name="game"
              value="breakout"
              checked={game === "breakout"}
              onChange={(event) => setGame(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Add One Sentence Review:</Form.Label>
            <Form.Control
              as="textarea"
              rows="1"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}




        {/* <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>One Sentence Review</Form.Label>
            <Form.Control as="input" rows={3} />
          </Form.Group>

          <Form.Group controlId="selectGame">
            <Form.Label> Select your Game for Review</Form.Label>
            <Form.Check type = "radio" label ="SnakeGame" name = "SnakeGame" id="SnakeGame" value="SnakeGame" />
            <Form.Check type = "radio" label ="Breakout" name = "Breakout" id="Breakout" value="Breakout" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        
        </Form> */}
        </div>




    </div>
  

    )
}

export default Gamereview;
