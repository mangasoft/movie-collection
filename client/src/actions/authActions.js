import axios from 'axios';
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER
} from './actionTypes';
import ROOT_URL from '../constants';

export function loginUser(user) {
  // Wrapper for thunk.
  return function(dispatch) {
    axios.post(`${ROOT_URL}/login`, user)
      .then((response) => {
        return response.json();
      })
      .then(response => {
        dispatch({type: LOGIN_USER, payload: response.user});
      })
      .catch((err) => console.error());
  };
}

export function registerUser(user) {
  // Wrapper for thunk.
  return function(dispatch) {
    // const config = {  headers: { 'Authorization': userToken } };
    axios.post(`${ROOT_URL}/register`, user)
      .then((response) => {
        return response.json();
      })
      .then(response => {
        dispatch({type: REGISTER_USER, payload: response.user});
      })
      .catch((err) => console.error());
  };
}


export function logoutUser() {
  return {type: LOGOUT_USER};
}
