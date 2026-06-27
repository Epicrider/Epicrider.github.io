import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolioValkyrie.png'
import IMG6 from '../../assets/portfolioHexcaliber.png'
import GM from '../../assets/GeneralMotors.svg'
import CRUISE from '../../assets/Cruise.png'

const data = [
  {
    id: 0,
    logos: [
      { src: GM, alt: 'General Motors' },
      { src: CRUISE, alt: 'Cruise' },
    ],
    title: 'GM / Cruise',
    description: 'Autonomous vehicle robotics with GM Cruise.',
    demo: 'https://www.getcruise.com/'
  },
  {
    id: 1,
    image: IMG1,
    title: 'UAV Forge',
    description: 'Chief Engineer leading the electrical & software teams — built autonomous aerial and ground vehicles interfaced with a ground station over ROS and Linux.',
    demo: 'https://sites.uci.edu/uavforge/management-team/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Amazon',
    description: 'Software Engineer on the Amazon Photos Sharing & Engagement team — shipped production back-end code on AWS (DynamoDB, Glue, Athena, CDK) that directly impacts customers.',
    demo: 'https://www.amazon.com/Amazon-Photos/b?ie=UTF8&node=13234696011'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Robotics Research',
    description: "Research in Prof. Solmaz Kia's lab on local & global motion planning and control systems (LQR, MPC), simulated and implemented with Python, NumPy, and Drake.",
    demo: 'https://solmaz.eng.uci.edu/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Rocket Project',
    description: "Built radio telemetry systems for UCI Rocket Project's student-engineered competition launch vehicles.",
    demo: 'https://www.rocket.eng.uci.edu/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Valkyrie Robotics',
    description: 'Competitive robotics with Valkyrie (FRC Team 299) — building and programming robots for the FIRST Robotics Competition.',
    demo: 'https://valkyrierobotics.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Hexcaliber Studios',
    description: 'Indie game development with Hexcaliber Studios — gameplay programming and creative direction in Unity and Godot (including Soul Snatcher).',
    demo: 'https://hexcaliber.dev/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">

        {
          data.map(({id, image, logos, title, description, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  {logos
                    ? <div className="portfolio__item-logos">
                        {logos.map((logo) => (
                          <img key={logo.alt} src={logo.src} alt={logo.alt} loading='lazy' decoding='async' />
                        ))}
                      </div>
                    : <img src={image} alt={title} loading='lazy' decoding='async'/>}
                </div>
                <h3>{title}</h3>
                <p className="portfolio__item-desc">{description}</p>
                <div className="portfolio__item-cta">
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Website</a>
                </div>
              </article>
            )
          })
        }

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Epicrider" className='btn'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}

      </div>
    </section>
  )
}

export default Portfolio