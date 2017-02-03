import {
  GET_MOVIES,
  NEW_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE
} from '../actions/actionTypes';
import { REHYDRATE } from 'redux-persist/constants';

const INITIAL_STATE = {
  movies: [],
  deletedMovie: {},
  newMovie: {},
  updatedMovie: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.movies;
      if (incoming) {
        return { ...state, ...incoming };
      }
      return state;
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case NEW_MOVIE:
      return { ...state, newMovie: action.payload };
    case UPDATE_MOVIE:
      return { ...state, updatedMovie: action.payload };
    case DELETE_MOVIE:
      const deletedMovie = action.payload;
      let newMovies = ...state.movies;
      const idx = newMovies.findIndex(m => return m._id === deletedMovie._id);
      newMovies.splice(idx, 1);
      return { ...state, deletedMovie, movies: newMovies };
    default:
      return state;
  }
};
