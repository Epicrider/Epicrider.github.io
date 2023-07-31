import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__robotics">
          <h3>Robotics Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>ROS</h4>
              <small className='text-light'>Interfacing with Drones / Ground Vehicles</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Gazebo</h4>
              <small className='text-light'>Drone Simulation</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Linux</h4>
              <small className='text-light'>Interfacing with Robots / Drones</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>IsaacSim</h4>
              <small className='text-light'>Used for Research / Training Robots</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Mavlink</h4>
              <small className='text-light'>Interfacing with Drones for autonomous flight</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>NumPy / Matplotlib / Scipy</h4>
              <small className='text-light'>Used for Multitude of projects including control systems and vision</small>
              </div>
            </article>
          </div>
        </div>

      {/* End of Robotics */}

      <div className="experience__gamedev">
      <h3>Game Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Unity</h4>
            <small className='text-light'>Most games made with Hexcaliber Studios</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Godot</h4>
            <small className='text-light'>Used in Soul Snatcher by Hexcaliber</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Unreal Engine</h4>
            <small className='text-light'>Light Learning and General Familiarity</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>C#</h4>
            <small className='text-light'>Experienced through Unity Games</small>
            </div>
          </article>
        </div>
      </div>

    {/* End of Game Development */}

      <div className="experience__gamedev">
      <h3>Backend / Frontend</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Amazon Web Services / DyanmoDB, Gluejob, Athena, CDK, etc.</h4>
              <small className='text-light'>Utilized heavily at Amazon Internship in Amazon Photos</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React Native</h4>
              <small className='text-light'>Used for this website!</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Utilized heavily in Amazon Photos Backend</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript / Typescript</h4>
              <small className='text-light'>Utilized for Amazon Photos and this website</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML / CSS</h4>
              <small className='text-light'>Utilized varying projects including this website</small>
              </div>
            </article>
        </div>
      </div>

      {/* End of Backend/Frontend */}

      <div className="experience__gamedev">
      <h3>Related / Extra Skills</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Git / Github</h4>
              <small className='text-light'>My Bread and Butter. Used everywhere</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Robotics, Backend, Game Dev, Vision, etc. Python is love, Python is life</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Robotics and Class Projects</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Spanish / Bangla</h4>
              <small className='text-light'>Proficient in both</small>
              </div>
            </article>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Experience