//components/CookingContainer.js
import * as React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { addUser } from '../actions/user'

class CookingContainer extends React.Component {

    
    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name;

    this.setState({
        [name]: value
    })
}

    handleSubmit = (event) => {
        event.preventDefault()
    
        this.props.addUser({
        id: (this.props.users.length + 1),
        name: this.state.name,
        dish: this.state.dish,
        topic: this.state.topic,
        price: this.state.price,
        time: this.state.time,
        location: this.state.location
        })
    }

    render() {
    return (
    <div align="center">
    <div>
    <p><Link to="" className="go-back"><FontAwesomeIcon icon="arrow-left"/> Go back</Link></p>
    </div>
        <h2>Add a dish</h2>
    
    <form onSubmit={this.handleSubmit}>
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
        <div id="form-topic">
            <label>
                Topic: &nbsp;
                <input type="text" name="topic" onChange={this.handleChange} />
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
            <input type="submit" value="Submit" />

    </form>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    users: state.userReducer
})


export default connect(mapStateToProps, {addUser})(CookingContainer)