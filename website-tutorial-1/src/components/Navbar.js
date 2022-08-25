import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <h1>TRVL</h1>
      <Link to='/' className="navbar-logo">
        TRVL
      </Link>
    </>
  );
}

export default Navbar