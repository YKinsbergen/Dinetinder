//components/CookingContainer.js
import * as React from 'react'

export default class CookingContainer extends React.Component {
    
    // handleChange = (event) => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    // }


    // handleSubmit = (event) => {
    //     event.preventDefault()
    
    //     if (this.state.name && this.state.description) {
    //         this.props.addPizza({
    //         name: this.state.name,
    //         description: this.state.description,
    //         ingredients: []
    //         })
    //     }
    // }

    render() {
    return (<div align="center">
        <h2>Add a dish</h2>
    
        <form onSubmit={this.handleSubmit}>
            <label>
            Dish name:
            <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
            Price:
            <input type="text" name="description" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>)
        }
    }

