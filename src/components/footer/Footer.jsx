import React from 'react'
import './footer.css'
import {BsLinkedin, BsInstagram, BsGithub, BsGit} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Omar Hossain</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><Link to='/blog'>Field Log</Link></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/omar-hossain-engineering/' target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/Epicrider' target='_blank' rel='noopener noreferrer'><BsGithub/></a>
        <a href='https://www.instagram.com/omarh_rider/' target='_blank' rel='noopener noreferrer'><BsInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Omar Hossain. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer