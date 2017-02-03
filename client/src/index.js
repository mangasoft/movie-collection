import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import App from './App';
import About from './components/About/AboutContainer';
import './assets/css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
