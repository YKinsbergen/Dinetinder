//components/Homepage.js
import * as React from 'react'
import {Link} from 'react-router-dom'
// import 'action' from '../actions/?'

export default class Homepage extends React.Component {
    render() {
        return (
    <div className="App">

        <header className="App-header"> 
            <h1 className="App-title">Welcome to Look or Cook</h1>
        </header>
        
        <div id="homepage-button-div"> 
            <Link to='/Cooking' id="dine-in">
                Cooking
            </Link>         
            <br />
            <Link to='/Looking' id="dine-out">
                Looking 
            </Link>
        </div> 

    </div>
        )
    }
}
