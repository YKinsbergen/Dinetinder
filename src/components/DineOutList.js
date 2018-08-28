//components/DineOutList.js
import * as React from 'react'
import dog from '../images/dog.png'

export default function DineOutList(props) {
    return (
        <div>
        <img id="dog" src={dog} draggable="false"/> <br/>
            You're now in component: DineOutList
            This is where you'll be swiping.
        </div> 
    )
}