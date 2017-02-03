import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import { connect, Provider } from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import { bindActionCreators } from 'redux';

import App from './components/App/AppContainer';
import About from './components/About/AboutContainer';
import configureStore from './store/configureStore'

const store = configureStore({}, undefined, autoRehydrate());
persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={About} />
        <Route path="register" component={About} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
