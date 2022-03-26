
const MovieInfo = (props) => {
  const data = props.info;
  console.log(data)
  return (
    <div>
      <p>
        {data[0].title} by {data[0].director} was released on {data[0].year}
      </p>
      <p>Rating: {data[0].rating}</p>
    </div>
  );
};

export default MovieInfo;