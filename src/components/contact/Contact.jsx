import React from 'react'
import './contact.css'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iw9nasw', 'template_gu7p41s', form.current, 'LtTJ4keXjFYDbskwv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

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
        <form ref={form} onSubmit={sendEmail}>
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