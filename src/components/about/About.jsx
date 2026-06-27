import React from 'react'
import './about.css'
import ME from '../../assets/Hossain_Omar.webp'
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
            <img src={ME} alt='Omar Hossain' loading='lazy' decoding='async' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
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
            Software Developer and Roboticist by Day, Game Developer by Night, Engineer all Day.
            I'm Omar Hossain, a multi-skilled Computer Scientist and Engineer currently pursuing a
            Master's in Robotics (MSE) at the University of Pennsylvania, after earning my bachelor's
            in Computer Science &amp; Engineering from UC Irvine. Much of my experience spans Robotics,
            AI, Aerospace, Backend, and Game Development, and I have the ability to acquire any skill
            the job demands.
            My most notable work includes building AI-driven autonomous robots for a DARPA challenge,
            assembling and programming autonomous drones, robotics research in motion planning and
            reinforcement learning, radio telemetry in aerospace, game development, and team leadership.
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