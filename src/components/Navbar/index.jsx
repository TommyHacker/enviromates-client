import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>  
        <h1>hello</h1>
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink className="login-link" to="/login">Login</NavLink>
        </nav>
      

    </>
  )
}

export default NavBar;
