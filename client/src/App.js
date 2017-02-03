import React, { Component } from 'react';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hey There</p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
