import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import UserListContainer from './components/UserListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header"> <br/><br/>
          <h1 className="App-title">Welcome to Dinetinder</h1>
        </header>
        <p>
          <UserListContainer />
        </p>
      </div>
      </Provider>
    );
  }
}

export default App;
