import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__robotics">
        <div className="experience_robotics">
          <h3>Robotics Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>ROS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Gazebo</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Unity</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>

      {/* End of Robotics */}

      <div className="experience__gamedev">
      <h3>Game Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Unity</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Godot</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Unreal Engine</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>C#</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>C++</h4>
            <small className='text-light'>Experienced</small>
          </article>
        </div>
      </div>
      </div>
      <div className="experience__backend"></div>
    </section>
  )
}

export default Experience