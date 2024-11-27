import React from 'react'
import Image from 'next/image'
const Skills = () => {
  return (
        <div className='bg-gray-900 px-6 py-6' id="skills">
    <div className='border-2 border-white text-center lg:py-48 py-16 md:mt-20'>
    <div className='text-center md:w-full'>
      <h1 className='md:text-5xl text-4xl font-bold' data-aos="fade-right">Skills</h1>
    <div className='flex flex-col md:flex md:flex-row justify-center items-center
     gap-5 lg:gap-16 md:mt-20 mt-10 px-6'>
        <Image
        src="/img/html.png"
        alt='html'
        width={100} 
        height={100}
        className='rounded-full' data-aos="zoom-in"/>

<Image
        src="/img/css.jpeg"
        alt='css'
        width={100} 
        height={100}
        className='rounded-full' data-aos="zoom-in"/>

<Image
        src="/img/ts.png"
        alt='ts'
        width={100} 
        height={100}
        className='rounded-full' data-aos="zoom-in"/>

<Image
        src="/img/tcss1.jpeg"
        alt='tcss'
        width={100} 
        height={100}
        className='rounded-full' data-aos="zoom-in"/>

<Image
        src="/img/react.png"
        alt='react'
        width={100} 
        height={100}
        className='rounded-full' data-aos="zoom-in"/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Skills