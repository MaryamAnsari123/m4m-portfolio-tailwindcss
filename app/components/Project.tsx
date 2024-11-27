import Link from "next/link";

export default function Project({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="border-2  w-56 md:w-48 lg:w-80 h-44
     border-blue-600 hover:shadow-md  rounded-lg shadow-xl shadow-black hover:shadow-4xl
     transition-shadow bg-gray-700" data-aos="zoom-in">
      <div className="text-center place-items-center space-y-4 p-3 lg:p-5">
      <h2 className="lg:text-3xl text-2xl md:text-xl font-bold">{title}</h2>
      <p className="text-white">{description}</p>
      <p>
      <Link href={link} target="_blank" className="text-blue-500
       hover:bg-yellow-200 font-bold bg-gray-200 p-2 md:p2 rounded-md ">
        View Project
      </Link>
      </p>
      </div>
    </div>
  );
}


