import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Todos />
        </header>
      </div>
    );
  }
}

export default App;


//after building reducers and actions and components, render todos component and import.