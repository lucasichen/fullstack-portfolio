import React, {useState} from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './Navbar.scss'
import { images } from '../../constants'

function Navbar() {
    const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
        <div className='app__navbar-logo'>
            
            <a href='/'><img src= {images.logo} alt="logo"/></a>
        </div>
        <ul className='app__navbar-links'>
            {['home','about','skills','projects','contact','resume'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    {item === 'resume' ? <a href='https://drive.google.com/file/d/1CKL-mENPCq-4GZ0NvOHxt-8p489FnR3h/view' target='_blank' rel='noopener noreferrer' alt='Lucas_chen_resume'>{item}</a> : <a href={`#${item}`}>{item}</a>}
                </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul className='app__navbar-links'>
                            {['home','about','skills','projects','contact','resume'].map((item) => (
                            <li key={item}>
                                {item === 'resume' ? <a href='https://drive.google.com/file/d/1CKL-mENPCq-4GZ0NvOHxt-8p489FnR3h/view' target='_blank' rel='noopener noreferrer' alt='Lucas_chen_resume'>{item}</a> : <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>}
                            </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
        </div>
    </nav>
  )
}

export default Navbar