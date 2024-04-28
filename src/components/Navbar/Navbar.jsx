import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
      <>
        <div className="navbar">
                <div className="title">SHE SHARE
                    <p className='sub-title'>Vacational Rentals</p></div>
          <div className="nav-links">
            <ul>
             <li>Home</li>
            </ul>
          </div>
          <div className="nav-btn">
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
      </>
    );
}

export default Navbar