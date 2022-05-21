import React, { useState } from 'react'
import './Footer.scss'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper' 
import { client } from '../../client'

const Footer = () => {
  const [formData, setFormData] = useState({name:'',email:'',message:''});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    client.create(contact)
    .then(() => {
      setLoading(false)
      setIsSubmitted(true)
    }
    )
  }
  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.emailicon} alt='email'/>
          <a href='mailto:lucas@ichen.ca' className='p-text'>lucas@ichen.ca</a>
        </div>
        {/* <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile'/>
          <a href='tel:+1 (437) 241-2691' className='p-text'>+1 (437) 241-2691</a>
        </div> */}
      </div>
      
      {!isSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input type='text' placeholder='Name' className='p-text' name='name' value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input type='email' placeholder='Email' className='p-text' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea 
          className='p-text'
          placeholder='Message'
          name='message'
          value={message}
          onChange={handleChangeInput}
          />
        </div>
        <button  type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending': 'Send'}</button>
      </div>
      : <div>
          <h3 className='head-text'>Thank you for getting in touch</h3>
      </div>
      }
    </>
  )
}

// Wrap with COPYRIGHT and bottom left button links
export default AppWrap(
  MotionWrap(Footer,'app__footer'),
  'contact',
  "app__whitebg"  // changes background color of section
  );