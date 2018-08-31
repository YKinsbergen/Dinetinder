//components/MessagesContainer.js
import React from 'react';
import { connect } from 'react-redux';
import {addMessage} from '../actions/message'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MessagesContainer extends React.Component {
    showMessages = (userId) => {
        let person = this.props.messageArray.find(persona => persona.id === userId)
        document.getElementById('conv-container').innerHTML = `<p> You're welcome at ${person.name}'s dinner party.<br/>The address is ${person.address}. <br /> We will be talking about ${person.convoTopic}</p>`
    }
    render() {
        if (this.props.messageArray[0] !== undefined && this.props.profile[0] !== undefined) {
        return (
            <div>
                <p><Link to="" className="go-back"><FontAwesomeIcon icon="arrow-left"/> Go back</Link></p>
            
                <div id="dinners-wrap">

                    <div id="conv-container" className="container-pos">
                            <p>To check your messages with someone, click on the corresponding person's button</p>
                    </div>
                
                    <div id="all-dinners-container" className="container-pos">
                        <ul>
                            {this.props.messageArray.map(message => 
                                    <li><p onClick={() => this.showMessages(message.id)}>{message.name}'s dinner event</p></li>
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        )
        } else if (this.props.messageArray[0] === undefined && this.props.profile[0] !== undefined){
            return <div>
                 <p><Link to="" className="go-back"><FontAwesomeIcon icon="arrow-left"/> Go back</Link></p>
                <h2 style={{textAlign:"center"}}>You currently have no messages.</h2>
            </div>
        } else {
                return(
                    <div>
                        <p align="center" id="profile-error-header">
                            No profile found, please return to the <Link to="" id="profile-error-link">homepage</Link>
                            &nbsp; to sign-up.
                        </p>
                    </div>
                )
            }
    }
}
const mapStateToProps = (state) => ({
    messageArray: state.messageReducer,
    profile: state.profileReducer
})

export default connect(mapStateToProps, {addMessage})(MessagesContainer)