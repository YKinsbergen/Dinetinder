import React, { Component } from 'react';
import './App.css';
import './AppMobile.css';
import './Modal.css';
import { Route } from 'react-router-dom'
import DineOutContainer from './components/DineOutContainer'
import CookingContainer from './components/CookingContainer'
import MessagesContainer from './components/MessagesContainer';
import Homepage from './components/Homepage'
import LoadingScreen from 'react-loading-screen';
import logo from './images/logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, 
        faUser, 
        faUtensils, 
        faComments, 
        faTicketAlt, 
        faClock, 
        faMapMarkerAlt,
        faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  state={
    loading: true
  }

  componentDidMount () {
    setTimeout(() =>
      this.setState({ loading: false })
    , 100)
    library.add(faStroopwafel, faUser, faUtensils, faComments, faTicketAlt, faClock, faMapMarkerAlt, faArrowLeft )
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
    text='COOK &nbsp; or &nbsp; LOOK'
  > 
        <div>
          <Route exact path='/' component={Homepage}/>
        </div>
    </LoadingScreen>
          <Route exact path='/Cooking' 
          component={CookingContainer}/>
          <Route exact path='/Looking' 
          component={DineOutContainer}/>
          <Route exact path='/Messages' 
          component={MessagesContainer}/>

      </div>
    );
  }
}

export default App;
