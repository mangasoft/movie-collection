import React from 'react';
import ReactDOM from 'react-dom';
import EditMovie from './EditMovieContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditMovie />, div);
});
