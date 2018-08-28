import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import store from './store'
import DineOutContainer from './components/DineOutContainer'
import Homepage from './components/Homepage'
import LoadingScreen from 'react-loading-screen';
import dog from './images/dog.png'


class App extends Component {
  state={
    loading: true
  }

  componentDidMount () {
    setTimeout(() =>
      this.setState({ loading: false })
    , 500)
  }

  render() {
    const {loading} = this.state
    return (
      <Provider store={store}>
      <div>
      <LoadingScreen
    loading={loading}
    bgColor='grey'
    spinnerColor='#9ee5f8'
    textColor='white'
    logoSrc={dog}
    text='Dining options coming up'
  > 
          <div>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/DineOutSwipePage' 
          component={DineOutContainer}/>
        </div>

  </LoadingScreen>
      </div>
      </Provider>
    );
  }
}

export default App;
