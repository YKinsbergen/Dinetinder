//components/ProfileContainer.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProfileContainer extends React.Component {
    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }
    
    render() {
        return(
            <div>
                <p><Link to="" className="go-back"><FontAwesomeIcon icon="arrow-left"/> Go back</Link></p>
            
            This is your profile page, please enter your information.

                            <div align="center">

        <h1 id="cooking-header">Add your information</h1>

        <form onSubmit={this.handleSubmit} id="form-div">
                <div id="form-name">
                    <label>
                        Name: &nbsp;
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                </div>
                <div id="form-dish">
                    <label>
                        Dish: &nbsp;
                        <input type="text" name="dish" onChange={this.handleChange} />
                    </label>
                </div>
                <div id="form-convoTopic">
                    <label>
                        convoTopic: &nbsp;
                        <input type="text" name="convoTopic" onChange={this.handleChange} />
                    </label>
                </div>
                <div id="form-price">
                    <label>
                        Price: &nbsp;
                        <input type="text" name="price" onChange={this.handleChange} />
                    </label>
                </div>
                <div id="form-time">
                    <label>
                        Time: &nbsp;
                        <input type="text" name="time" onChange={this.handleChange} />
                    </label>
                </div>
                <div id="form-location">
                    <label>
                        Location: &nbsp;
                        <input type="text" name="location" onChange={this.handleChange} />
                    </label>
                </div>
                <div id="form-photo">
                    <label>
                        URL: &nbsp;
                        <input type="text" name="photo" onChange={this.handleChange} />
                    </label>
                </div>
                    <input type="submit" value="Submit" id="submit-button"/>

                </form> <br/>
                <div id="submitmessage"></div>
                </div>
            </div>
        )
    }
}


export default connect (null)(ProfileContainer)