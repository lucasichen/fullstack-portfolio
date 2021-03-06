import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home','about','skills','projects','contact'].map((item,index) => (
        // {['home','about','skills','work','testimonials','contact'].map((item,index) => (
            <a 
            href={`#${item}`} 
            key={item + index}
            title={item}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#313BAC'} : { }}
            />
        ))}
    </div>
  )
}

export default NavigationDots;