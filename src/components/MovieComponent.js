import React from 'react';
import MoviePoster from './MoviePoster'
import '../App.css'

const MovieComponent = () => {
  return (
    <div className="App">
      <h1>Movies</h1>
      <MoviePoster />
    </div>
  );
};

export default MovieComponent;
