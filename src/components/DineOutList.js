//components/DineOutList.js
import * as React from 'react'

export default function DineOutList(props) {
    return (
    <div>
        <h2>
            You're now in component: DineOutList
            This is where you'll be swiping.
        </h2>
        <ul>
            {props.users.map(user =>
            <li key={user.id}>{user.dish}</li>)}
        </ul>
    </div> 
    )
}