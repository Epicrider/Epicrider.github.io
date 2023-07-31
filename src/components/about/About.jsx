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
              <h5>Companies / Orgs</h5>
              <small>8 Professional Positions in different Organizations</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Non-Classwork Projects Completed</small>
            </article>
          </div>

          <p>
            Software Developer and Robotocist by Day, Game Developer by Night, Engineer all Day.
            I'm Omar Hossain, a multi-skilled Computer Scientist and Engineer with a bachelor's
            degree in CSE from the University of California at Irvine. Much of my experience relates 
            to Robotics, Aerospace, Backend, and Game Development, however I have the ability to 
            acquire any skills given the job.
            My most notable works includes assembling and programming autonomous drones, 
            robotics research in motion planning and Reinforcement Learning, radio telemetry in aerospace, 
            game development, and team leadership.
            If you still don't think I'm the right person for your job, please, peruse my website and
            let my portfolio prove you wrong ;) Or... let's just skip to the fun part
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About