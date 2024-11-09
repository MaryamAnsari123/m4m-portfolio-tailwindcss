
import Image from "next/image";
export default function Hero() {
    return (
      <div className="bg-gray-900">
      <div className="flex justify-evenly md:ml-auto md:mr-auto py-32 
      flex-wrap items-center gap-2">
        <div className="w-96 py-10 p-5 flex-wrap">
          <h1 className="text-6xl font-bold" data-aos="fade-right">Welcome to My Portfolio</h1>
          <p className="text-yellow-200 mt-4 text-xl animate-bounce" 
          data-aos="fade-left">Hello! I am
          <em><span className="text-3xl font-bold text-blue-500"> Maryam Ansari</span></em> , a Web Developer.</p>
        </div>
        <div data-aos="zoom-in">
          <Image 
          src="/img/m1.jpeg"
          alt="pic"
          width={250}
          height={300}
          className="rounded-md"/>
        </div>
      </div>
      </div>
    );
  }