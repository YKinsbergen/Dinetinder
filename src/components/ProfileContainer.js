//components/ProfileContainer.js
import React from 'react';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
    render() {
        return(
            <div>
                This is your profile page
            </div>
        )
    }
}


export default connect (null)(ProfileContainer)