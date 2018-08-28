//components/Homepage.js
import * as React from 'react'
import {Link} from 'react-router-dom'
// import 'action' from '../actions/?'

export default class Homepage extends React.Component {
    render() {
        return (
    <div className="App">
    <header className="App-header"> <br/><br/>
      <h1 className="App-title">Welcome to Look or Cook</h1>
    </header>
    <div id="homepage-button-div">
            <button id="dine-in">
            <Link to='/Cooking'>
            Cooking
            </Link>
            </button> <br/><br/><br/><br/>
            <button id="dine-out">
            <Link to='/Looking'>
            Looking 
            </Link>
            </button>
            </div> 
            <div>
            </div>
    </div>
        )
    }
}
