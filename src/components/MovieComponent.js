import React from 'react';
import MovieData from './MovieData'
import {movies} from '../data/movies'
import '../App.css'

const MovieComponent = (props) => {
  return (
    <div className="App">
      <h1>Movies</h1>
      {
        movies.map((movie) =>(
          <MovieData key={movie.id} data={movie}/>
        ))
      }
    </div>
  );
};

export default MovieComponent;
