import React from 'react'
import {NavLink} from 'react-router-dom'


export default function ErrorElement() {
    return (
        <div className="error">
            <h3 style={{fontSize: 80}}>There Was An Error</h3>
            <NavLink to="/"><button className='returnHome'>Home</button></NavLink>
        </div>
    )
}