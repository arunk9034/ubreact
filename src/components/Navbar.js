import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <header className='navbar'>
        <div className='navbar__title navbar__item'>Unibots</div>
        <Link to="/" style={{ textDecoration: 'none', color:"white" }}><div className='navbar__item'>About Us </div></Link>
        <Link to="/contact" style={{ textDecoration: 'none',color:"white" }}><div className='navbar__item'>Contact </div></Link>
        <Link to="/help" style={{ textDecoration: 'none',color:"white" }}><div className='navbar__item'>Help</div> </Link>       
    </header>
    </div>
  )
}

export default Navbar