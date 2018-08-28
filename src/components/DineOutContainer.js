//components/DineOutContainer.js
import * as React from 'react'
import { connect } from 'react-redux'
import DineOutList from './DineOutList'
import ReactSwipeNavigation from 'react-swipe-navigation';
import dog from '../images/dog.png'
// import 'action' from '../actions/?'


class DineOutContainer extends React.Component {
    render() {
        return (<ReactSwipeNavigation menu={ ['Profile', 'Messages'] } >
                <div id="dogDiv"><DineOutList /></div>
                <div id="msgDiv"><img src={dog} draggable={false}/></div>
    </ReactSwipeNavigation>
        )
    }
}


const mapStateToProps = (state) => {
    return null
}

export default connect(null)(DineOutContainer)