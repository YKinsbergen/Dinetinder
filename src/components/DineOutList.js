//components/DineOutList.js
import * as React from 'react'

export default function DineOutList(props) {
    return (
    <div id="dine-out-list">
        <h2 align="center">
            You're now in component: DineOutList. <br/>
            This is where you'll be swiping.
        </h2>
        <p align="center">
            {props.users.map(user =>
            <li key={user.id}>Dinner at {user.name}'s. 
            <div>
            <img className="userPhotos" src={user.dishPhoto}/>
            </div>
            <p>
            Dish: {user.dish}, price: €{user.price}
            </p>
            </li>)}
        </p>
    </div> 
    )
}