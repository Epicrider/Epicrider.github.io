import React from 'react'
import './cta.css'
import CV from '../../assets/ResumeLateMay2023.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary-cta'>Let's Talk</a>
    </div>
  )
}

export default CTA