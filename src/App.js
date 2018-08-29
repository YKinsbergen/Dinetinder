import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import DineOutContainer from './components/DineOutContainer'
import CookingContainer from './components/CookingContainer'
import Homepage from './components/Homepage'
import LoadingScreen from 'react-loading-screen';
import logo from './images/logo.png'

class App extends Component {
  state={
    loading: true
  }

  componentDidMount () {
    setTimeout(() =>
      this.setState({ loading: false })
    , 750)
  }


  render() {
    const {loading} = this.state
    return (
      <div>
    <LoadingScreen
    loading={loading}
    bgColor='darkslategrey'
    spinnerColor='#9ee5f8'
    textColor='#FBF6F3'
    logoSrc={logo}
    text='Dining options coming up'
  > 
        <div>
          <Route exact path='/' component={Homepage}/>
        </div>
    </LoadingScreen>
          <Route exact path='/Cooking' 
          component={CookingContainer}/>
          <Route exact path='/Looking' 
          component={DineOutContainer}/>
      </div>
    );
  }
}

export default App;
