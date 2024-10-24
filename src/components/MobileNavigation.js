import React from 'react'
import { mobileNavigation } from '../contants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-16 bg-black bg-opacity-70 backdrop-blur-xl fixed bottom-0 w-full z-40'>
      <div className='flex items-center justify-between h-full text-neutral-400 px-4'>
        {mobileNavigation.map((nav, index) => (
          <NavLink 
            key={`${nav.label}mobilenavigation`} 
            to={nav.href}
            aria-label={nav.label} 
            className={({ isActive }) => 
              `flex flex-col items-center justify-center space-y-1 h-full w-full transition-all duration-300 ${
                isActive ? 'text-white' : 'hover:text-neutral-200'
              }`
            }
          >

            <div className='text-2xl'>
              {nav.icon}
            </div>

            <p className='text-xs sm:text-sm'>
              {nav.label}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default MobileNavigation