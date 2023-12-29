import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolioValkyrie.png'
import IMG6 from '../../assets/portfolioHexcaliber.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'UAV Forge',
    demo: 'https://sites.uci.edu/uavforge/management-team/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Amazon',
    demo: 'https://www.amazon.com/Amazon-Photos/b?ie=UTF8&node=13234696011'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Robotics Research',
    demo: 'https://solmaz.eng.uci.edu/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Rocket Project',
    demo: 'https://www.rocket.eng.uci.edu/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Valkyrie Robotics',
    demo: 'https://valkyrierobotics.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Hexcaliber Studios',
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
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
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