//components/MessagesContainer.js
import React from 'react';
import { connect } from 'react-redux';
import {addMessage} from '../actions/message'

class MessagesContainer extends React.Component {
    render() {
        if (this.props.messageArray[0] !== undefined) {
        return (
          <div>
              {this.props.messageArray[0].name}
              {this.props.messageArray[1].name}
          </div>  
        )
        } else {
            return <div>
                You currently have no messages.
            </div>
        }
    }
}
const mapStateToProps = (state) => ({
    messageArray: state.messageReducer
})

export default connect(mapStateToProps, {addMessage})(MessagesContainer)