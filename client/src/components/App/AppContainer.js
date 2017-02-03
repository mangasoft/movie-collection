import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../../assets/css/App.css';
import * as actions from '../../actions';

/**
 *  This is the high level entry point of the application.
 **/
 class App extends Component {
   render() {
     return (
       <div className="App">
         <p>Hello</p>
         {this.props.children}
       </div>
     );
   }
 }

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

App.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
