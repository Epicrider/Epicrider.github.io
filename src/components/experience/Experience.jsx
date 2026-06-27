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
          <h3>Robotics & Controls</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>ROS</h4>
              <small className='text-light'>Interfacing drones & ground vehicles with a ground station</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Isaac Sim / Isaac Gym</h4>
              <small className='text-light'>Robot simulation & RL training in research at UPenn and UCI</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Gazebo</h4>
              <small className='text-light'>Drone and vehicle simulation</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Mavlink</h4>
              <small className='text-light'>Autonomous flight control for UAVs</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Linux</h4>
              <small className='text-light'>Daily driver for robotics development and deployment</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Control Systems (LQR / MPC)</h4>
              <small className='text-light'>Modeled with Drake for kinematic & dynamic systems</small>
              </div>
            </article>
          </div>
        </div>

      {/* End of Robotics & Controls */}

      <div className="experience__gamedev">
      <h3>AI / Machine Learning</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>LLMs & Semantic Search</h4>
            <small className='text-light'>Vision-Language navigation (VLFM) for autonomous robots — DARPA challenge</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Reinforcement Learning</h4>
            <small className='text-light'>Quadruped locomotion and Rapid Motor Adaptation research</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Graph Neural Networks</h4>
            <small className='text-light'>Universal quadruped policy across robot URDFs</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Computer Vision</h4>
            <small className='text-light'>Machine perception for navigation and mapping</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Weights & Biases</h4>
            <small className='text-light'>Experiment tracking across ML / RL research</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>NumPy / SciPy / Matplotlib</h4>
            <small className='text-light'>Simulation, control, and vision pipelines</small>
            </div>
          </article>
        </div>
      </div>

    {/* End of AI / Machine Learning */}

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
            <small className='text-light'>General familiarity and transferable skills</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>C#</h4>
            <small className='text-light'>Primary language for Unity games</small>
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
              <h4>AWS — DynamoDB, Glue, Athena, CDK</h4>
              <small className='text-light'>Production back-end on the Amazon Photos team</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Core language for the Amazon Photos back-end</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Used to build this website</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript / TypeScript</h4>
              <small className='text-light'>Amazon Photos and this website</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML / CSS</h4>
              <small className='text-light'>Front-end across varied projects</small>
              </div>
            </article>
        </div>
      </div>

      {/* End of Backend/Frontend */}

      <div className="experience__gamedev">
      <h3>Languages</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Robotics, ML, vision, and back-end — my go-to language</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Robotics and systems-level project work</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Back-end services and class projects</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Spanish / Bangla</h4>
              <small className='text-light'>Fluent in English, proficient in both</small>
              </div>
            </article>
        </div>
      </div>

      {/* End of Languages */}

      <div className="experience__gamedev">
      <h3>Tools & DevOps</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Git / GitHub</h4>
              <small className='text-light'>My bread and butter. Used everywhere</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Docker</h4>
              <small className='text-light'>Containerizing robotics and ML environments</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Arduino / PlatformIO</h4>
              <small className='text-light'>Embedded firmware for robotics hardware</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Jupyter Notebook</h4>
              <small className='text-light'>Prototyping ML and data analysis</small>
              </div>
            </article>
        </div>
      </div>

      {/* End of Tools & DevOps */}

      </div>
    </section>
  )
}

export default Experience
