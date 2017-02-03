import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import '../../assets/css/Movie.css';
const MovieListItem = ({movie, userId}) => {
  return (
    <div>
      <img className="Movie-poster-thumb" src={movie.posterImage} alt={movie.title} />
      <p>Title: {movie.title}</p>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <p>Actors: {movie.actors.join(", ")}</p>
      {userId === movie.uploadedByUser && <Link to="updateMovie" className="btn btn-default">
        Update
      </Link>}
      {userId === movie.uploadedByUser && <button className="btn btn-danger">
        Delete
      </button>}
    </div>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired
};

export default MovieListItem;
