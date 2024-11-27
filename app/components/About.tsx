import Image from "next/image";

export default function About() {
    return (
      <div className="bg-gray-900 py-6 px-6" id="about">
<div className="border-2 border-white md:mt-20">
      <div className="flex flex-col justify-center md:flex md:flex-row
       items-center md:gap-30 gap-10 lg:gap-44">
      <div data-aos="zoom-in-up" className="lg:py-44 py-16">
          <Image 
          src="/img/m2.jpeg"
          alt="pic"
          width={300}
          height={200}
          className="rounded-md mt-4 px-2 py-2"/>
        </div>
        <div className="lg:w-96 w-56 lg:py-10 py-2 px-2">
          <h1 className="lg:text-4xl text-xl font-bold" data-aos="zoom-in-up">About Me</h1>
          <p className="text-yellow-200 lg:mt-4 md:text-sm text-sm lg:text-base mb-2" data-aos="zoom-in-down">Hi, I am Maryam Ansari. I&apos;m a motivated frontend developer who is committed 
         to making aesthetically pleasing and intuitive online experiences. I&apos;m 
           currently honing my abilities in the AI , Web 3.0 & Metaverse program, where I&apos;m 
           investigating the nexus between web development and cutting-edge technologies. 
           I enjoy developing dynamic, responsive applications and 
           am always learning new tools to realize creative concepts. 
           Let&apos;s work together to create something incredible!</p>
        </div>
        </div>
      </div>
      </div>
    )
  }