import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.github.com/lucasichen' target='_blank'><FaGithub /></a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/lucasichen' target='_blank'><FaLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia;