import React from "react";
import { CardGroup,Card,Button } from "react-bootstrap";


function Movie(props) {
  return (
    <CardGroup style={{ display: 'flex', justifyContent: 'space-around', gap: 30, bordercolor: 'black' }}>
      
    <div>
      <div key={props.movie.id}>
        <Card key={props.movie.id}>
          <Card.Img variant="top"  src= {`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
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
    </CardGroup>
  );
}

export default Movie;
 