import React, { useState } from 'react'
import './Nav.css';
import {HiOutlineHome} from 'react-icons/hi';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {BiBook} from 'react-icons/bi';
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {BiLogoGmail} from 'react-icons/bi';

function Nav() {
  const[activeNav , setActiveNav] = useState('#');
  return (
    
    <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiOutlineUserCircle /></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiLogoGmail /></a>
    </nav>
    
  )
}


export default Nav;
