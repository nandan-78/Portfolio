import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

function Footer() {
  return (
   <footer>
    <a href="#" className='footer_logo'>Nitin Nandan</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Coding Profile</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="https:/facebook.com" target='blank'><BsFacebook /></a>
      <a href="https:/instagram.com" target='blank'><BsInstagram /></a>
      <a href="https:/twitter.com" target='blank'><BsTwitter /></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Nitin Nandan. All rights resvered </small>
    </div>
   </footer>
  )
}

export default Footer;
