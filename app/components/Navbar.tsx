import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='containor sticky z-50 shadow-lg shadow-white
     top-0 bg-gray-700 p-3'>
        <div className='flex flex-wrap justify-between items-center'>
            <div className='text-xl font-bold w-44 text-center'>
                My Portfolio
            </div>
            <div className='justify-center px-5 mr-8'>
            <ul className='lg:gap-10 md:ml-auto md:mr-auto flex flex-wrap md:flex-row text-base font-bold'>
                <li><Link href="/" className='hover:text-yellow-400'>Home</Link></li>
                <li><Link href="#about" className='hover:text-yellow-400'>About</Link></li>
                <li><Link href="#skills" className='hover:text-yellow-400'>Skills</Link></li>
                <li><Link href="/project" className='hover:text-yellow-400'>Projects</Link></li>
                <li><Link href="#contact" className='hover:text-yellow-400'>Contact</Link></li>
                
            </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
