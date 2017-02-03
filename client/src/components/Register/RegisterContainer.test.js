import React from 'react';
import ReactDOM from 'react-dom';
import Register from './RegisterContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
});
