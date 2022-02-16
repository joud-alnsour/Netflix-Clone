import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=b300cdefad7adfd65b734dc5211bfd15`
      );

      const data = await response.json();
      let capData = []
      for (let h of data.results) {
        h["caption"] ="No Caption"
        h["isCaption"] =false
        capData.push(h)
        
      }
      setMovies(capData);
      
    } catch (error) {
    }
  };
    const addComment = (data, id) => {
          let addComment = movies.map(movies => {
              if (movies.id === id) {
                  movies.caption = data.userCaption;
                  movies.isCaption = !movies.isCaption;
                  return movies;
              }
              else return movies
          })
      setMovies(addComment);
    };

    useEffect(() => {
      fetchData();
    }, []);
 
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} addComment={addComment} />}
        />
        { }
      </Routes>
    </>
  );
}

export default App;