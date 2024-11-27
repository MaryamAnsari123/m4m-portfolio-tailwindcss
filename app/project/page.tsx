import ProjectCard from "../components/Project";

const projects = [
  { title: "Pomodoro Timer", description: "A timer for the pomodoro technique", 
    link: "https://m4m-pomodoro-timer-14.vercel.app/" },
  { title: "Random Jokes", description: "A Random Jokes App", 
    link: "https://m4m-randomjoke-7.vercel.app/" },
    { title: "Simple Calculator", description: "A simple Calculator", 
      link: "https://m4m-simplecalculator-5.vercel.app/" },
      { title: "Birthday Wish", description: "A Birthday Wish App", 
        link: "https://m4m-birthdaywish-3.vercel.app/" },
        { title: "Weather Widget", description: "A weather widget App", 
          link: "https://m4m-weather-widget-2.vercel.app/" },
          { title: "Number Gussing", description: "A Number Guessing Game", 
            link: "https://m4m-number-guessing.vercel.app/" },
            { title: "Color Picker", description: "A Color Picker App", 
              link: "https://color-picker-one-drab.vercel.app/" },
              { title: "Tip Calculator", description: "A Tip Calculator", 
                link: "https://m4m-tip-calculator.vercel.app/" },
                { title: "BMI Calculator", description: "A BMI Calculator", 
                  link: "https://m4m-bmi-calculator.vercel.app/" },
     
];

export default function Project() {
  return (
    <div className="m-2 bg-blue-300 p-2">
      <div className='border-2 border-white text-center lg:py-8 py-4'>
        <div className="md:text-6xl text-3xl shadow-lg shadow-blue-600 bg-gray-200
       font-bold text-center text-gray-600 border-2 border-gray-600 rounded-md p-4 m-4">
      <h1 data-aos="fade-right">Projects</h1>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-3
       lg:px-20 p-2 lg:gap-8 gap-6 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      
      </div>
      </div>
    </div>
  );
}