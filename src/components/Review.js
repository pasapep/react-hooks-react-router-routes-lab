import React, {useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";

function Review ({handleNewGame}) {

    const [game, setGame] = useState('');
    const [description, setDescription] = useState('');
    const [gameReview, setGameReview] = useState('');
    const [gameType, setGameType] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        let newReview = {
            gameReview: gameReview,
            gameType: gameType,
        }

        fetch("http://localhost:5555/game", {
            method: "POST",
            headers: {
                "Content-Type" : "application/JSON"
            },
            body: JSON.stringify(newReview)
        })
            .then (resp => resp.json())
            .then (shinyGame => handleNewGame(shinyGame))
        
    }

    return (
        <div> 
            <h3> Add Game Review </h3> <br />
            <Form onSubmit={handleSubmit} className="w-50">
            <Form.Group>
                <Form.Label>Select a game:</Form.Label>
                <Form.Check
                type="radio"
                label="Snakegame"
                name="game"
                value="snakegame"
                checked={gameType === "snakegame"}
                onChange={(event) => setGameType(event.target.value)}
                />
                <Form.Check
                type="radio"
                label="Breakout"
                name="game"
                value="breakout"
                checked={gameType === "breakout"}
                onChange={(event) => setGameType(event.target.value)}
                /> 
            </Form.Group>
            <Form.Group>
                <Form.Label>Add Review:</Form.Label>
                <Form.Control
                type="text"
                placeholder = "Add a review"
                value = {gameReview}
                onChange={(event) => setGameReview(event.target.value)}
                />
            </Form.Group><br />
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </div>
    )
}

export default Review;

{/* <Form onSubmit = {handleSubmit} >
<Form.Group width = "equal">
    <Form.Input fluid label = "gameReview" placeholder = "gameReview" name = "gameReview" value = {gameReview} onChange = {(e) => setGameReview(e.target.value) } />
    
</Form.Group>
</Form> */}