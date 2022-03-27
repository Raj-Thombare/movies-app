const MovieData = ({data}) => {
  return (
    <div>
      <img src={data.poster} alt={data} key={data.id} />
      <p>
        {data.title} by {data.director} was released on {data.year}
      </p>
      <p>Rating: {data.rating}</p>
    </div>
  );
};

export default MovieData;
