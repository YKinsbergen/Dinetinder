// //components/DineOutContainer.js
//import * as React from 'react'
import { connect } from 'react-redux'
import DineOutList from './DineOutList'
// // import ReactSwipeNavigation from 'react-swipe-navigation';
// // import 'action' from '../actions/?'
//
//
// class DineOutContainer extends React.Component {
//     render() {
//         return <DineOutList users={this.props.users}/>
//     }
// }
//
//
// const mapStateToProps = (state) => ({
//     users: state.userReducer
// })
//
// export default connect(mapStateToProps)(DineOutContainer)
import React from 'react';
import Swipe, { SwipeItem } from 'swipejs/react';

class DineOutContainer extends React.Component {
  onTransactionEnd = (index, elem) => {
    console.log("transaction")
  }

  handleCallback = (index, elem) => {
    console.log("callback")
  }

  handleClick = (e) => {
    console.log("click")
  }

  render() {
    return (
      <Swipe
        className='swipe-container'
        ref={o => this.swipe = o}
        startSlide={0}
        speed={300}
        auto={false}
        draggable={true}
        continuous={true}
        autoRestart={false}
        disableScroll={false}
        stopPropagation={false}
        callback={this.handleCallback}
        transitionEnd={this.onTransactionEnd}>

        {this.props.users.map(user => {
          return <SwipeItem className='user-swipes' key={user.id}
          onClick={this.handleClick}>
          <img src={user.dishPhoto} />
        </SwipeItem>
      })}

      </Swipe>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userReducer
})

export default connect(mapStateToProps)(DineOutContainer)
