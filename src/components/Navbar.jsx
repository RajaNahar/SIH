import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg'
function Navbar() {
  return (
    <nav className="navbar ">
      <div className="logo">
        <img className='rounded-full' src={logo} alt="Logo" />
      </div>
      <h1 id='NAME'>Green Gains</h1>
      <ul className="flex text-xl gap-10 justify-evenly ml-20">

        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
