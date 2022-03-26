import { movies } from '../data/movies';
import MovieInfo from './MovieInfo';

const MoviePoster = (props) => {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div>
            <img src={movie.poster} alt={movies} />
            <MovieInfo info={movies}/>
          </div>
        );
      })}
      
    </div>
  );
};

export default MoviePoster;
