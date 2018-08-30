// //components/DineOutContainer.js
import React from 'react';
import { connect } from 'react-redux'
import Swipe, { SwipeItem } from 'swipejs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Route, Link } from 'react-router-dom'


class DineOutContainer extends React.Component {
  state={
    userIndex: 0
  }

  onTransactionEnd = (index, elem) => {
    
  }

  handleCallback = (index, elem) => {
    this.setState({userIndex: index})
    console.log(this.state)
  }

  handleClick = (event) => {
  }

  handleJoinDinner = () => {
    console.log(this.state.userIndex)
  }
  render() {
    return (
      <div>
        <p><Link to="" className="go-back"><FontAwesomeIcon icon="arrow-left"/> Go back</Link></p>
          <Swipe
            style={{display:"block", margin:"5% auto"}}
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
              <img src={user.photo} />
              <div>     
                <p><FontAwesomeIcon icon="user" className="swipe-icon"/> {user.name}</p>
                <p><FontAwesomeIcon icon="utensils" className="swipe-icon"/> {user.dish}</p>
                <p><FontAwesomeIcon icon="comments" className="swipe-icon"/> {user.convoTopic}</p>
                <p><FontAwesomeIcon icon="ticket-alt" className="swipe-icon"/> € {user.price}</p>
                <p><FontAwesomeIcon icon="clock" className="swipe-icon"/> {user.time}</p>
                <p><FontAwesomeIcon icon="map-marker-alt" className="swipe-icon"/> 8 km</p>
              </div>
            </SwipeItem>
          })}
          </Swipe>
          
          <div style={{textAlign:"center"}}>
              <a onClick={this.handleJoinDinner} className="swipe-button">join dinner</a>
          </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userReducer
})

export default connect(mapStateToProps)(DineOutContainer)
