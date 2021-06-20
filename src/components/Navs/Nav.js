import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
function Nav() {
    return (
        <>

           <div className='Nav-Container'>

                <NavLink exact activeClassName="active" to='/home'  className='actions'>HOME</NavLink>
                <NavLink to='/start'   className='actions'>START</NavLink>
                <NavLink to='/tutorial'  className='actions'>TUTORIAL</NavLink>
                <NavLink to='/about'  className='actions'>ABOUT</NavLink>
                <NavLink to='/contact'  className='actions'>CONTACT US</NavLink>

           </div>


        </>
    )
}

export default Nav
