//components/Homepage.js
import * as React from 'react'
import {Link} from 'react-router-dom'
// import 'action' from '../actions/?'

export default class Homepage extends React.Component {
    render() {
        return (
    <div className="App">
    <header className="App-header"> 
    <h1>Welcome to COOK or LOOK</h1>
    </header>
        <div id="homepage-button-div"> 
            <div>
            <Link to='/Cooking' id="dine-in">
            Cooking
            </Link>  
            </div>
            <div>
            <Link to='/Looking' id="dine-out">
            Looking 
            </Link>    
            </div> 
        </div> 
    </div>
        )
    }
}
