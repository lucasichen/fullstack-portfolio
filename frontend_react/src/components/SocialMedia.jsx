import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaGithub,FaLinkedin } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaGithub />
        </div>
        <div>
            <FaLinkedin />
        </div>
    </div>
  )
}

export default SocialMedia;