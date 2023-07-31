import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/OmarHossain.PNG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
   /* To do <div className="container header_container", you do .container.head_container and press enter*/
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Omar Hossain</h1>
        <h5 className='text-light'>Robotics Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='Omar Hossain' />
        </div>
      </div>
    </header>
  )
}

export default Header