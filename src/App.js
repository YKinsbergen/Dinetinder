import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header"> <br/><br/>
          <h1 className="App-title">Welcome to Dinetinder</h1>
        </header>
        <button id="dine-out">
          Dine out
        </button>
        <button id="dine-in">
          Dine in
        </button>
      </div>
      </Provider>
    );
  }
}

export default App;
