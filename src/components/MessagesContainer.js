//components/MessagesContainer.js
import React from 'react';
import { connect } from 'react-redux';
import {addMessage} from '../actions/message'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MessagesContainer extends React.Component {
    render() {
        if (this.props.messageArray[0] !== undefined) {
        return (
          <div>
          <p><Link to="" className="go-back"><FontAwesomeIcon icon="arrow-left"/> Go back</Link></p>
              {this.props.messageArray.map(message => <p>Dinner at: {message.name}</p>)}
          </div>  
        )
        } else {
            return <div>
                 <p><Link to="" className="go-back"><FontAwesomeIcon icon="arrow-left"/> Go back</Link></p>
                You currently have no messages.
            </div>
        }
    }
}
const mapStateToProps = (state) => ({
    messageArray: state.messageReducer
})

export default connect(mapStateToProps, {addMessage})(MessagesContainer)