import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Specialties</h2>

      <div className="container services__container">
        {/* End of UI/UX Design */}
        <artcile className="service">
          <div className='service__head'>
            <h3>Game Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to program any functionality to the game, from game mechanics to UI</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design varying environments that make use of game mechanics in new and clever ways</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to lead programmers, artists, and musicians to one clear vision in a directing role</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Advanced knowledge of the Unity Engine and transferrable skills to other popular engines (such as Unreal Engine)</p>
            </li>
          </ul>
        </artcile>
        {/* End of stuff */}
        <artcile className="service">
          <div className='service__head'>
            <h3>Robotics</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interfacing with robots, including multi-agent scenarios utilzing ROS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Vehicle Motion Planning, with knowledge of Control Theory and Path Planning algorithms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Simulation through tools such as Gazebo and Issacsym</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Versed in contemporary knowledge of Reinforcement Learning and Training for various robotics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Able to aid in research, development, and deployment in any stage of robotics development</p>
            </li>
          </ul>
        </artcile>
        <artcile className="service">
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Provide Backend support with knowledge of creating APIs and utilizing connected services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to add upon large code bases spanning years of work by a high-tech company</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Well versed in Amazon Web Services (AWS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to design solutions for customer's needs around the AWS ecosystem</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proficient experience in Front End including HTML, CSS, Javscript / Typescript, and React Native</p>
            </li>
          </ul>
        </artcile>
      </div>
    </section>
  )
}

export default Services