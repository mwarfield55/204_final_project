import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Search />
    );
  }
}

export default App;
