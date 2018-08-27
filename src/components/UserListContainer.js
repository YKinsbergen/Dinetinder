//components/UserListContainer.js
import * as React from 'react'
import { connect } from 'react-redux'
import UserList from './UserList'
// import 'action' from '../actions/?'

class UserListContainer extends React.Component {
    render() {
        return <UserList />
    }
}

const mapStateToProps = (state) => {
    return null
}

export default connect(null)(UserListContainer)