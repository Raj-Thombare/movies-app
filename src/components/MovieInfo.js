
const MovieInfo = ({info}) => {
  return (
    <div>
      <p>
        {info.title} by {info.director} was released on {info.year}
      </p>
      <p>Rating: {info.rating}</p>
    </div>
  );
};

export default MovieInfo;