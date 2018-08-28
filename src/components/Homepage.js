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
    <div>
            <button id="dine-out">
            <Link to='/DineOutSwipePage'>
            Dine out 
            </Link>
            </button>
            </div> <br/><br/><br/><br/>
            <div>
            <button id="dine-in">
            Dine in
            </button>
            </div>
    </div>
        )
    }
}
