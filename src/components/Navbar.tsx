import React from 'react'
import LightModeToggle from './LightModeToggle'

const Navbar = () => {
  return (
    <div className="flex justify-between px-5 py-8 bg-white dark:bg-[#2b3743] text-black dark:text-white md:px-8 lg:px-16">
        <span className='font-bold'>Where in the World?</span>
        <LightModeToggle />
    </div>
  )
}

export default Navbar