import Image from "next/image";

export default function About() {
    return (
<div className="bg-gray-900 py-20" id="about">
      <div className="flex justify-evenly flex-wrap items-center gap-4">
      <div data-aos="zoom-in-up">
          <Image 
          src="/img/m2.jpeg"
          alt="pic"
          width={300}
          height={200}
          className="rounded-md"/>
        </div>
        <div className="w-96 py-10 flex-wrap">
          <h1 className="text-4xl font-bold" data-aos="zoom-in-up">About Me</h1>
          <p className="text-yellow-200 mt-4" data-aos="zoom-in-down">Hi, I am Maryam Ansari. I&apos;m a motivated frontend developer who is committed 
         to making aesthetically pleasing and intuitive online experiences. I&apos;m 
           currently honing my abilities in the AI , Web 3.0 & Metaverse program, where I&apos;m 
           investigating the nexus between web development and cutting-edge technologies. 
           I enjoy developing dynamic, responsive applications and 
           am always learning new tools to realize creative concepts. 
           Let&apos;s work together to create something incredible!</p>
        </div>
        
      </div>
      </div>
    )
  }