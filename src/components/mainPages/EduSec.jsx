import React from 'react'
import { FaCubes ,FaUniversity,FaSchool,FaGraduationCap} from "react-icons/fa";

function EduSec() {
  const education = [
    {
      title: "Software Engineer",
      school: "National School of Applied Sciences Agadir",
      date: "Sep 2021 ➔ Present",
      description:
        "Currently pursuing a Computer Engineering degree. Focused on full stack development, Java technologies, and DevOps practices to build scalable and reliable applications.",
      tags: [
        "Java",
        "Spring Boot",
        "Full Stack Development",
        "React",
        "Node.js",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "DevOps",
        "Microservices",
      ],
      icon: "/images/ensa.jpeg", // logo de l’ENSA
    },
    {
      title: "Industrial Chemistry",
      school: "Institute of Mines in Marrakech",
      date: "Sep 2020 ➔ Jul 2021",
      description:
        "Completed the 1st year in Industrial Chemistry before switching to Computer Science to follow my passion for technology.",
      tags: ["Chemistry", "Industrial Processes"],
      icon: "images/imm.jpeg", // logo de l’IMM
    },
    {
      title: "Scientific Baccalaureate",
      school: "El Baqali High School",
      date: "Jul 2020",
      description:
        "Graduated with a Baccalaureate in Mathematical Sciences, option French.",
      tags: ["Mathematics", "Physics", "French"],
      icon:"images/bac.png", // pictogramme ou logo lycée
    },
  ];
  

  

  return (
    <main className="flex-1 bg-[#CAECD5] dark:bg-[#141414] text-black dark:text-white 
    p-6 m-10 rounded-tr-2xl rounded-2xl
    max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-300 dark:scrollbar-thumb-[#95F187] dark:scrollbar-track-gray-700 scroll-smooth scrollbar-hover:">


   
     
     <section id="home" className="flex flex-col items-center">
      <div className="flex items-center gap-2  p-4 font-orbitron ">
      <FaCubes className="text-3xl text-gray-500/80" />
      <span className="text-3xl font-bold text-gray-500/80">This is my</span>
    </div>
         <span className='tracking-widest'>
            <span className="text-3xl text-gray-900 font-orbitron dark:text-white font-bold  ">Educational</span>
            <span className=" text-3xl text-[#4AA57B] font-orbitron font-bold dark:text-[#95F187]"> Background</span>
          </span>
          <div className="relative border-l border-gray-700 ml-20">
          {education.map((item, index) => (
          <div
          key={index}
          className="mb-10 ml-20 p-6 rounded-xl dark:bg-[#1A1A1B]  bg-[#94DAAD]/30  "
        >
          {/* Timeline Dot */}
                    <span className="absolute flex items-center justify-center w-20 h-20 bg-green-500 rounded-full -left-9 ring-1 ring-slate-300 overflow-hidden">
            <img src={item.icon} alt={item.title} className="w-screen h-screen object-contain" />
          </span>


          {/* Title & School */}
          <h3 className="text-lg font-semibold text-green-700 dark:text-[#95F187] font-orbitron tracking-wide">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 font-semibold mb-2 mt-2 dark:text-gray-400 font-montserrat ">
      
            {item.school}</p>

          {/* Date */}
          <div className="inline-block dark:bg-[#070707] bg-[#707B77] text-gray-300 font-montserrat text-sm font-semibold px-3 py-1 rounded-md mb-3">
            {item.date}
          </div>

          {/* Description */}
          <p className="text-gray-700  dark:text-white font-montserrat ">{item.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 ">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="dark:bg-[#070707] bg-[#a7acaa] text-xs px-3 py-1 mt-5 rounded-full font-montserrat uppercase tracking-wide "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

      </section>  
      </main>


  )
}

export default EduSec