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
    <div className="border-2 text-center w-80 h-44 items-center justify-center
     border-blue-600 p-6 rounded-lg shadow-xl shadow-black hover:shadow-4xl
     transition-shadow duration-400 bg-gray-700 mt-8" data-aos="zoom-in">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-white mt-2 mb-3">{description}</p>
      <Link href={link} target="_blank" className="text-blue-500
       hover:text-yellow-300 font-bold">
        View Project
      </Link>
    </div>
  );
}


