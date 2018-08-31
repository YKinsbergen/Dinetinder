//components/Homepage.js
import * as React from 'react'
import {Link} from 'react-router-dom'
import messageicon from '../images/messages-icon.png'
import profileicon from '../images/profile.png'
import logowhite from '../images/logowhite.png'
import { connect } from 'react-redux'
import { addProfile } from '../actions/profile'

let dog = false
class Homepage extends React.Component {
    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name;

    this.setState({
        [name]: value
    })
}

    handleSubmit = (event) => {
        event.preventDefault()
        if (event.target.name.value && event.target.address.value && event.target.photo.value) {
        dog = true,
        this.props.addProfile({
        name: this.state.name,
        address: this.state.address,
        photo: this.state.photo
        })
        this.forceUpdate() 
        } else {
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
            <p className="message-icon-text">Messages</p>
            </Link>
        </div>
        <div id="profile-icon-wrapper">
            <Link to='/Profile' id="profile-link">
                <img src={profileicon} />
            <p className="profile-icon-text">Profile</p>
            </Link>
        </div>
    <header className="header"> 
        <img src={logowhite}/>
    </header>
        <div id="homepage-button-div"> 
          <div id="dine-in-div">
            <Link to='/Cooking' id="dine-in-link">
              cooking dinner
            </Link>  
          </div>
          <div id="or">
             <p>or</p>
          </div>
          <div id="dine-out-div">
            <Link to='/Looking' id="dine-out-link">
              joining dinner
            </Link>    
          </div> 
        </div> 
    </div>
        )
    } else {
        return (
    <div align="center">

        
        {/* <h1 id="signup-welcome-header">Cook & Look!</h1> <br/> */}
        <div id="cookandlook">
          <img src={logowhite} />
        </div>

        <form onSubmit={this.handleSubmit} id="profile-form-div">
        <h1 id="signup-header">Create your profile</h1>
        <div>
            <label id="profile-form-name">
                Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   
                <input type="text" name="name" onChange={this.handleChange} />
            </label>
        </div>

        <div>
            <label id="profile-form-address">
                Address: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <input type="text" name="address" onChange={this.handleChange} />
            </label>
        </div>
        <div>
            <label id="profile-form-photo">
                 Photo (URL): &nbsp;
                <input type="text" name="photo" onChange={this.handleChange} />
            </label>
        </div>
                <input type="submit" value="confirm" id="profile-submit-button"/>

        </form>
        <div id="submitmessage"></div>
        </div>)
    }
}
}

const mapStateToProps = (state) => ({
    profile: state.profileReducer
})


export default connect(mapStateToProps, {addProfile})(Homepage)