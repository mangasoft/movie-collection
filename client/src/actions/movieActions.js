import axios from 'axios';
import {
  GET_MOVIES,
  NEW_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE
} from './actionTypes';
import ROOT_URL from '../constants';

export function getMovies() {
  // Wrapper for thunk.
  return function(dispatch) {
    // const config = {  headers: { 'Authorization': userToken } };
    axios.get(`${ROOT_URL}/movies`)
      .then((response) => {
        return response.json();
      })
      .then(response => {
        dispatch({type: GET_MOVIES, payload: response.movies});
      })
      .catch((err) => console.error());
  };
}

export function newMovie(movie, user) {
  // Wrapper for thunk.
  return function(dispatch) {
    const config = {  headers: { 'Authorization': user.token } };
    axios.post(`${ROOT_URL}/movie`, movie, config)
      .then((response) => {
        return response.json();
      })
      .then(response => {
        dispatch({type: NEW_MOVIE, payload: response.movie});
      })
      .catch((err) => console.error());
  };
}

export function updateMovie(movie, user) {
  // Wrapper for thunk.
  return function(dispatch) {
    const config = {  headers: { 'Authorization': user.token } };
    axios.post(`${ROOT_URL}/movie/${movie._id}`, movie, config)
      .then((response) => {
        return response.json();
      })
      .then(response => {
        dispatch({type: UPDATE_MOVIE, payload: response.movie});
      })
      .catch((err) => console.error());
  };
}

export function deleteMovie(movie, user) {
  // Wrapper for thunk.
  return function(dispatch) {
    const config = {  headers: { 'Authorization': user.token } };
    axios.delete(`${ROOT_URL}/movie/${movie._id}`, movie, config)
      .then((response) => {
        return response.json();
      })
      .then(response => {
        dispatch({type: DELETE_MOVIE, payload: response.movie});
      })
      .catch((err) => console.error());
  };
}
