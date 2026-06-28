import React from 'react'
import './education.css'
import UPENN from '../../assets/UPenn.svg'
import UCI from '../../assets/UCIAnteaters.png'

const Education = () => {
  return (
    <section id='education'>
      <h5>My Academic Background</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <article className="education__card">
          <div className="education__logo">
            <img className='logo-penn' src={UPENN} alt='University of Pennsylvania' loading='lazy' decoding='async' />
          </div>
          <h3>University of Pennsylvania</h3>
          <h4 className="education__degree">M.S.E. in Robotics</h4>
          <small className="education__meta text-light">Expected May 2027 &middot; Philadelphia, PA</small>

          <h5 className="education__subhead">Current Coursework</h5>
          <ul className="education__courses">
            <li>ESE 6500 &mdash; Learning in Robotics</li>
            <li>ESE 6510 &mdash; Physical Intelligence</li>
            <li>CIS 5800 &mdash; Machine Perception</li>
          </ul>

          <h5 className="education__subhead">Completed Coursework</h5>
          <ul className="education__courses">
            <li>MEAM 5170 &mdash; Control &amp; Optimization in Robotics</li>
            <li>MEAM 5200 &mdash; Introduction to Robotics</li>
            <li>ENM 5500 &mdash; Mathematics in Robotics</li>
          </ul>
        </article>

        <article className="education__card">
          <div className="education__logo">
            <img className='logo-uci' src={UCI} alt='University of California, Irvine' loading='lazy' decoding='async' />
          </div>
          <h3>University of California, Irvine</h3>
          <h4 className="education__degree">B.S. in Computer Science &amp; Engineering</h4>
          <small className="education__meta text-light">Graduated June 2023 &middot; Irvine, CA</small>

          <h5 className="education__subhead">Highlights</h5>
          <ul className="education__courses">
            <li>Cumulative GPA: 3.83 / 4.0</li>
            <li>Major: Computer Science &amp; Engineering (CSE)</li>
            <li>Undergraduate robotics research in motion planning &amp; reinforcement learning</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Education
