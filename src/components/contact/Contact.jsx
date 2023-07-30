import React from 'react'
import './contact.css'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option_icon' />
            <h4>Email</h4>
            <h5>omarhossain.engineering@gmail.com</h5>
            <a href='mailto:omarhossain.engineering@gmail.com'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option_icon'/>
            <h4>LinkedIn</h4>
            <h5>Omar Hossain</h5>
            <a href='https://www.linkedin.com/in/omar-hossain-engineering/'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option_icon'/>
            <h4>Instagram</h4>
            <h5>@omarh_rider</h5>
            <a href='https://www.instagram.com/omarh_rider/'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder="Your email" required />
          <textarea name="message" rows='7' placeholder="Your message" required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact