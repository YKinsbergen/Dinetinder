//components/Homepage.js
import * as React from 'react'
import {Link} from 'react-router-dom'
import messageicon from '../images/messages-icon.png'
import profileicon from '../images/profile.png'

let dog = false
export default class Homepage extends React.Component {
    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name;

    this.setState({
        [name]: value
    })
}

    handleSubmit = (event) => {
        event.preventDefault()
        if (event.target.name.value)
        return dog = true,
        this.forceUpdate()
        else {
            document.getElementById("submitmessage").innerHTML = 'Please fill in every field.'
        }
}

    render() {
        if (dog === true) {
        return (
    <div className="App">
    <div id="message-icon-wrapper">
        <Link to='/Messages' id="message-link">
            <img src={messageicon} />
        <p class="message-icon-text">Messages</p>
        </Link>
    </div>
    <div id="profile-icon-wrapper">
         <Link to='/Profile' id="profile-link">
            <img src={profileicon} />
        <p class="profile-icon-text">Profile</p>
        </Link>
    </div>
    <header className="header"> 
    <h1>Welcome to <br />COOK or LOOK </h1>
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
    } else {
        return (
<div align="center">

<h1 id="cooking-header">Welcome! <br/> <br/> Please create a profile</h1>

<form onSubmit={this.handleSubmit} id="form-div">
        <div id="form-name">
            <label>
                Name: &nbsp;
                <input type="text" name="name" onChange={this.handleChange} />
            </label>
        </div>
                <input type="submit" value="Submit" id="submit-button"/>

        </form> <br/>
        <div id="submitmessage"></div>
        </div>)
    }
}
}
