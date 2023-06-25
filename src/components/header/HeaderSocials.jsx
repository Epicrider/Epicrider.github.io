import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/omar-hossain-engineering/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Epicrider' target='_blank'><BsGithub/></a>
        <a href='https://www.instagram.com/omarh_rider/' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials