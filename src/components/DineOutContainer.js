//components/DineOutContainer.js
import * as React from 'react'
import { connect } from 'react-redux'
import DineOutList from './DineOutList'

class DineOutContainer extends React.Component {
    render() {
        return <DineOutList users={this.props.users}/>
    }
}


const mapStateToProps = (state) => ({
    users: state.userReducer
})

export default connect(mapStateToProps)(DineOutContainer)