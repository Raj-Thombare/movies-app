import React from 'react';
import MovieData from './MovieData'
import {movies} from '../data/movies'
import '../movies.css'

const MovieComponent = (props) => {
  return (
    <div className="movie-container">
      <h1>Movies</h1>
      <ul className="movie-list">
      {
        movies.map((movie) =>(
          <MovieData key={movie.id} data={movie}/>
        ))
      }
      </ul>
    </div>
  );
};

export default MovieComponent;
