// //components/DineOutContainer.js
import React from 'react';
import { connect } from 'react-redux'
import Swipe, { SwipeItem } from 'swipejs/react';
import DineOutList from './DineOutList'


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
