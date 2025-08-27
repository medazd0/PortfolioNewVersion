import React from 'react'
import { FaCubes ,FaRegCalendarAlt,FaEnvelope ,FaGithub, FaBrain, FaRunning, FaCode, FaBookOpen} from "react-icons/fa";
import gsap from 'gsap';

function Main_page1() {
  const interests = [
    {
      icon: <FaBrain className="w-8 h-8 text-green-600" />,
      title: "Problem Solving",
      description: "Enjoy tackling complex challenges and finding creative solutions.",
    },
    {
      icon: <FaRunning className="w-8 h-8 text-green-600" />,
      title: "Running",
      description: "Staying active through running keeps me motivated and disciplined.",
    },
    {
      icon: <FaCode className="w-8 h-8 text-green-600" />,
      title: "Hackathons",
      description: "Participating in coding competitions and building innovative projects.",
    },
    {
      icon: <FaBookOpen className="w-8 h-8 text-green-600" />,
      title: "Reading Tech & Innovation Blogs",
      description: "Exploring new trends, tools, and ideas in technology and innovation.",
    },
  ];
  return (
<main className="flex-1 bg-[#CAECD5] dark:bg-[#141414] text-black dark:text-white mb-
                 p-10 m-10 rounded-2xl rounded-br-2xl
                 max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-300 dark:scrollbar-thumb-[#95F187] dark:scrollbar-track-gray-700 scroll-smooth scrollbar-hover:">


      <section id="home" className="flex flex-col items-center">
      <div className="flex items-center gap-2  p-4 font-orbitron ">
      <FaCubes className="text-3xl text-gray-500/80" />
      <span className="text-3xl font-bold text-gray-500/80">Hello...</span>
    </div>
    <span className=''>
            <span className="text-3xl text-gray-900 font-orbitron dark:text-white font-bold  ">I'm</span>
            <span className=" text-3xl text-[#4AA57B] font-orbitron font-bold dark:text-[#95F187]"> Mohamed  Azoud !</span>
          </span>
          <div className="flex items-center gap-4 p-4 rounded-lg text-green-800 dark:text-[#95F187] font-medium mt-4">
      {/* Pays */}
      <div className="flex items-center gap-4 text-gray-400">
        <FaRegCalendarAlt className="text-lg" />
        <span>Morocco</span>
      </div>

      <span>·</span>

      {/* Email */}
      <div className="flex items-center gap-4">
        <FaEnvelope className="text-lg" />
        <a href="mailto:m.azoud01@gmail.com" className="hover:underline">
          m.azoud01@gmail.com
        </a>
      </div>

      <span>·</span>

      {/* GitHub */}
      <div className="flex items-center gap-4">
        <FaGithub className="text-lg" />
        <a
          href="https://github.com/medazd0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @medazd0
        </a>
      </div>
    </div>
      </section>

    <div className="items-start border-l-4 border-green-700  tracking-wider flex gap-x-4 pl-4">
      <span className="font-medium text-2xl  font-orbitron text-green-700 dark:text-[#95F187]  ">A little bit</span>
      <span className="font-medium text-2xl   font-orbitron dark:text-white">about me ...</span>
    </div>
    <section className=" text-gray-200 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 ">
      
      {/* Écran stylisé */}
      <div className="w-72 h-56 border-4 border-gray-500 bg-black rounded-md shadow-lg flex items-center justify-center relative">
        <div className="space-y-2 text-left">
          <div className="bg-green-500 h-2 w-28"></div>
          <div className="bg-green-500 h-2 w-16 ml-4"></div>
          <div className="bg-green-500 h-2 w-36"></div>
          <div className="bg-green-500 h-2 w-32 ml-2"></div>
          <div className="bg-green-500 h-2 w-14 ml-6"></div>
          <div className="bg-green-500 h-2 w-10 ml-8"></div>
        </div>

        {/* Pied de l'écran */}
        <div className="absolute -bottom-8 w-16 h-6 bg-gray-700 border border-gray-500 rounded-sm"></div>
        <div className="absolute -bottom-12 w-24 h-3 bg-black dark:bg-gray-400"></div>
      </div>

   {/* Texte de présentation */}
<div className="flex-1 dark:text-white text-black font-montserrat font-semibold">
  <p className="mb-4  ">
    Passionate and motivated developer, with a strong focus on{" "}
    <span className="text-green-400">Java development</span>,{" "}
    <span className="text-green-400">DevOps practices</span> and{" "}
    <span className="text-green-400">Fullstack solutions</span>. I adapt quickly 
    to new technologies and enjoy tackling challenging problems.
  </p>
  <p className="mb-4">
    My expertise ranges from backend development with Java to modern frontend 
    frameworks, while integrating DevOps tools and methodologies to ensure 
    efficiency, scalability and reliability.
  </p>
  <p>
  I’m looking for a stimulating opportunity to contribute to ambitious projects and continue growing professionally.
  </p>
</div>

  </section>

<section className='mb-5'>
<div className="items-start border-l-4 border-green-700  tracking-wider flex gap-x-4 pl-4 mt-5">
      <span className="font-medium text-2xl  font-orbitron text-green-700 dark:text-[#95F187]  ">Personal </span>
      <span className="font-medium text-2xl   font-orbitron dark:text-white">interests</span>
    </div>
    <div className="grid md:grid-cols-2 gap-6 mt-5" 
     onMouseEnter={()=>{gsap.to("#cursor",{scale:2.5 ,duration:0.3})}}
     onMouseLeave={()=>{gsap.to("#cursor",{scale:1 ,duration:0.3})}}
      >
        {interests.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-green-100 dark:bg-[#070707] p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex-shrink-0 bg-green-200 rounded-full p-4">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-900 dark:text-[#95F187] font-orbitron">{item.title}</h3>
              <p className="text-gray-700 dark:text-white font-montserrat">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
</section>


     
    </main>
  )
}

export default Main_page1