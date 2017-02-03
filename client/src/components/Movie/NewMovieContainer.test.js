import React from 'react';
import ReactDOM from 'react-dom';
import NewMovie from './NewMovieContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewMovie />, div);
});
