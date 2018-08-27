import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import store from './store'
import DineOutContainer from './components/DineOutContainer'
import Homepage from './components/Homepage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <p>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/DineOutSwipePage' 
          component={DineOutContainer} />
        </p>
      </div>
      </Provider>
    );
  }
}

export default App;
