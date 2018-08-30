//components/Homepage.js
import * as React from 'react'
import {Link} from 'react-router-dom'
import messageicon from '../images/messages-icon.png'
import profileicon from '../images/profile.png'

export default class Homepage extends React.Component {
    render() {
        return (
    <div className="App">
    <Link to='/Messages' id="message-link">
    <img src={messageicon} />
    </Link>
    <Link to='/Profile' id="profile-link">
    <img src={profileicon} />
    </Link>
    <header className="App-header"> 
    <h1>Welcome to COOK or LOOK </h1>
    </header>
        <div id="homepage-button-div"> 
            <div id="dine-in-div">
            <Link to='/Cooking' id="dine-in-link">
            Cooking
            </Link>  
            </div>
            <div id="dine-out-div">
            <Link to='/Looking' id="dine-out-link">
            Looking 
            </Link>    
            </div> 
        </div> 
    </div>
        )
    }
}
