
import Image from "next/image";
export default function Hero() {
    return (
      <div className="bg-gray-900 px-6 py-6">
      <div className="border-2 border-white">
      <div className="flex flex-col md:flex md:flex-row justify-evenly 
     items-center lg:gap-2">
        <div className="lg:w-80 w-44 lg:py-44 py-16">
          <h1 className="lg:text-6xl text-3xl font-bold" data-aos="fade-right">Welcome to My Portfolio</h1>
          <p className="text-yellow-200 mt-4 lg:text-xl text-sm animate-bounce" 
          data-aos="fade-left">Hello! I am
          <em><span className="lg:text-3xl text-base font-bold text-blue-500"> Maryam Ansari</span></em> , a Web Developer.</p>
        </div>
        <div data-aos="zoom-in">
          <Image 
          src="/img/m1.jpeg"
          alt="pic"
          width={250}
          height={200}
          className="rounded-md mb-10 mt-10"/>
        </div>
      </div>
      </div>
      </div>
    );
  }