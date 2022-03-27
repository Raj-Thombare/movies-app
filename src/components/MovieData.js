const MovieData = ({data}) => {
  return (
    <div className="movie">
      <img src={data.poster} alt={data} key={data.id} />
      <p>
       <strong> {data.title}</strong> by {data.director} was released on {data.year}
      </p>
      <p>Rating: {data.rating}</p>
    </div>
  );
};

export default MovieData;
