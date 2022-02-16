import React from "react";
import { Card,Button } from "react-bootstrap";


function Movie(props) {
  return (
    <div>
      <div key={props.movie.id}>
        <Card key={props.movie.id}>
          <Card.Img variant="top" src={props.movie.poster_path} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
              {props.movie.overview}
            </Card.Text>
            <Card.Text>
              {props.movie.Caption} 
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                props.setMovie(props.movie);
                props.setShowModal(true)
              }}
            >
              Add to Fav
            </Button>
             
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Movie;
 