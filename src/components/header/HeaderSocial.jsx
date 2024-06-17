import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

function HeaderSocial() {
  return (

    <div className='header_socials' >
      <a href="https://linkdin.com" target='blank'><BsLinkedin /></a>
      <a href="https://github.com" target='blank'><BsGithub /></a>
      <a href="https://www.instagram.com/" target='blank'><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocial;
