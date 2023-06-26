import React from 'react'
import './about.css'
import ME from '../../assets/Hossain_Omar.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='Omar Hossain' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            This is just a copy pasta. You read the title, I just cannot believe I said the “g” word on accident. 
            Am I even an atheist anymore? I don’t like religion or anything but like maybe 
            it infiltrated me and is manipulating me to say “oh my g*d” instead of 
            “oh my science”. Please guys it wasn’t me, I didn’t mean it. 
            I’m very disappointed in myself, I think I need to go to science camp or go to 
            therapy. What if I’m secretly religious? what should I do? Is my foreskin going to 
            fall off?? Please can someone give me advice, any advice is appreciated.
            Again, this is just a copy-pasta.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About