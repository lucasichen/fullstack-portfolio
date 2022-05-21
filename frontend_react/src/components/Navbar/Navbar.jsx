import React, {useState} from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './Navbar.scss'
import { images, files } from '../../constants'

function Navbar() {
    const [toggle, setToggle] = useState(false)

    // Open pdf function
    // const openPDF = () => {
    //     const pdfWindow = window.open("lucas_chen_resume");
    //     const title     = "lucas_chen_resume";
    //     const URI       = title + ".pdf";
    //     const html      = `
    //     <html>
    //         <head>
    //         <title>${title}</title>
    //         </head>
    //         <body style="margin:0">
    //         <embed width="100%" height="100%" src=${files.resume} type="application/pdf">
    //         </body>
    //     </html>
    //     `;
    
    //     pdfWindow.document.write(html);
    //     pdfWindow.document.close();
    //     pdfWindow.history.pushState(null, null, URI);
    // };

  return (
    <nav className="app__navbar">
        <div className='app__navbar-logo'>
            
            <a href='/'><img src= {images.logo} alt="logo"/></a>
        </div>
        <ul className='app__navbar-links'>
            {['home','about','skills','projects','contact','resume'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    {item === 'resume' ? <a href='https://drive.google.com/file/d/1aMWiGbSsSQQyrNqqGLesePYDHS9VqXcL/view?usp=sharing' target='_blank' rel='noopener noreferrer' alt='Lucas_chen_resuem'>{item}</a> : <a href={`#${item}`}>{item}</a>}
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
                                {item === 'resume' ? <a href='https://drive.google.com/file/d/1aMWiGbSsSQQyrNqqGLesePYDHS9VqXcL/view?usp=sharing' target='_blank' rel='noopener noreferrer' alt='Lucas_chen_resume'>{item}</a> : <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>}
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