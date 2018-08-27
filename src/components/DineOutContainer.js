//components/DineOutContainer.js
import * as React from 'react'
import { connect } from 'react-redux'
import DineOutList from './DineOutList'
// import 'action' from '../actions/?'

class DineOutContainer extends React.Component {
    render() {
        return <DineOutList />
    }
}

const mapStateToProps = (state) => {
    return null
}

export default connect(null)(DineOutContainer)