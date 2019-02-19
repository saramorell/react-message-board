import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {

  state = {
    messages: []
  }

  render() {
    return (
      <div className="App">
      <div className="container">
      <Header />
      <h1>Hello!</h1>
      </div>
      </div>
    );
  }
}

export default App;
