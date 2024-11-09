import Link from "next/link";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>&copy; Maryam Ansari - All Rights Reserved</p>
        <div className="mt-2 text-center w-auto flex flex-wrap justify-center gap-5">
          <Link href="" target="_blank" 
          className="hover:text-yellow-300">
            <FaGithubSquare className="text-3xl"/></Link>
          <Link href="https://www.linkedin.com/in/maryam-ansari-a196312b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bml1drUkdRPem2gFGVxVwAA%3D%3D"
           target="_blank" className="hover:text-yellow-300 text-center">
          <FaLinkedin className="text-3xl"/>
          </Link>
          <Link href=""
           target="_blank" className="hover:text-yellow-300 text-center">
          <FaInstagram className="text-3xl"/>
          </Link>
        </div>
      </footer>
    );
  }
