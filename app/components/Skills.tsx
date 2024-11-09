import React from 'react'
import Image from 'next/image'
const Skills = () => {
  return (
    <div className='bg-gray-900 py-32'  id="skills">
    <div className='text-center mx-auto'>
      <h1 className='text-5xl font-bold' data-aos="fade-right">Skills</h1>
    <div className='flex flex-wrap justify-center gap-12 mb-24 h-44 mt-10 items-center'>
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
  )
}

export default Skills