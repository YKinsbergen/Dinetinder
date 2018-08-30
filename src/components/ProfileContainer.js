//components/ProfileContainer.js
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProfileContainer extends React.Component {
    render() {
        if (this.props.profile[0] !== undefined) {
        return(
            <div>
                <p><Link to="" className="go-back"><FontAwesomeIcon icon="arrow-left"/> Go back</Link></p>
                    <div align="center" id="profile-div">
                    <h1 id="profile-header">
                        Profile page
                    </h1>
                    <p id="profile-name">
                        Name:
                    </p>
                    <h2 id="profile-name-header">{this.props.profile[0].name}</h2>
                    <p id="profile-address"> 
                        Address: 
                    </p>
                    <h2 id="profile-address-header">{this.props.profile[0].address}</h2>
                    <p id="profile-photo">
                    Your photo:
                    <p>
                        <img src={this.props.profile[0].photo} />
                    </p>
                    </p>
                    </div>
                    <div align="center">
                    </div>
            </div>
            )
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
    profile: state.profileReducer
})

export default connect (mapStateToProps)(ProfileContainer)