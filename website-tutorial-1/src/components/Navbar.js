import React, {useState} from 'react'

function Navbar() {
  return (
    <>
        <nav calssName="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar