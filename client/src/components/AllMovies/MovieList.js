import React, { PropTypes } from 'react';
import MovieListItem from './MovieListItem';

const MovieList = ({movies, userId}) => {
  if (movies.length < 1) {
    return <p>There are no movies.</p>;
  }
  return (
    <div>
      {movies.map(movie => {
        return <MovieListItem movie={movie} key={movie._id} userId={userId} />;
      })}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired
};

export default MovieList;
