import React from 'react';
import './Navbar.css';
import { GiMoebiusTriangle } from "react-icons/gi";

function Navbar() {
  return (
    <header className='head'>
        <div className='head-text'>
            Welcome To The World of Tricone <GiMoebiusTriangle/>
        </div>
    </header>
  )
}

export default Navbar
