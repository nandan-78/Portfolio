import React from 'react'
import './Header.css';
import Cta from './Cta'
import ME from '../../assets/me1.png.png';
import HeaderSocial from './HeaderSocial';
function Header() {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Nitin Nandan</h1>
      <h5 className="class-light">FullStack Developer</h5>
      <h5 className="class-light">MERN Developer</h5>

      <Cta />
      <HeaderSocial />

      <div className="me">
        <img src={ME} alt="ME" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>

   </header>
  )
}

export default Header
