import Link from "next/link";
import Image from "next/image";
export default function Contact() {
    return (
      <div className="bg-gray-900" id="contact">
      <div className="flex justify-evenly flex-wrap py-20 items-center gap-4">
        <div className="w-auto flex-wrap" data-aos="zoom-in-up">
        <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
      <p className="text-yellow-400">Email: maryamansari405@gmail.com</p>
         <p className="text-yellow-400">LinkedIn: <Link href="https://www.linkedin.com/in/maryam-ansari-a196312b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bml1drUkdRPem2gFGVxVwAA%3D%3D"
          target="_blank" className="hover:underline">Maryam Ansari</Link> </p>
         <p className="text-yellow-400">Contact number: 0300-0000000</p>
        </div>
        <div className="w-64 bg-gray-500 h-64 mb-20 rounded-md" data-aos="zoom-in">
          <form className="flex flex-wrap justify-center flex-col items-center mt-5 mb-5 space-y-5">
<input type="text" placeholder="enter your name" 
className="border-2 border-gray-300 rounded-md p-1 text-sm w-44" />
<input type="email" placeholder="enter your email" 
className="border-2 border-gray-300 rounded-md p-1 text-sm w-44" />
<textarea rows={3} placeholder="message.." 
className="border-2 border-gray-300 rounded-md p-1 text-sm w-44 text-black" />
<button type="submit" className="bg-blue-500 text-sm hover:bg-green-500  text-white font-bold py-1 px-2 rounded-lg">Send</button>
          </form>
      </div>
      </div>
      </div>
    );
  }






