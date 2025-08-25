import React from "react";
import { FaGithub, FaYoutube,FaCubes } from "react-icons/fa";
import gsap from 'gsap'

function ProjectsSec() {
  const projects = [
    {
      title: "End-of-Year Project (PFA)",
      description:
        "Built and deployed a Cloud-Based Web and Desktop Application for Biometric Student Attendance Tracking.",
      technologies: [
        "JavaFX",
        "Spring Boot",
        "JWT",
        "AWS",
        "Docker",
        "React",
        "ZKTeco9500",
      ],
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png", // Exemple Front-End
      github: "https://github.com/your-repo",
      youtube: "https://youtube.com/your-demo",
    },
    {
      title: "Pharmacy Management",
      description:
        "Development of a system for managing pharmacy stock, tracking medicines, and simplifying supply management.",
      technologies: ["Java", "JavaFX", "MySQL", "SceneBuilder", "Maven"],
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png", // Exemple Backend
      github: "https://github.com/your-repo",
      youtube: "https://youtube.com/your-demo",
    },
    {
      title: "Room Management System",
      description:
        "Development of a web application for managing room reservations and releases (normal and exceptional) at ENSA Agadir.",
      technologies: ["Java EE", "EJB", "WildFly", "MySQL", "React"],
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // Exemple DevOps
      github: "https://github.com/your-repo",
      youtube: "https://youtube.com/your-demo",
    },
    {
      title: "Basic Platform for Buying Gold and Jewelry",
      description:
        "Development of a Web Platform to browse and buy gold and jewelry items.",
      technologies: ["Java", "React", "MySQL"],
      image: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
      github: "https://github.com/your-repo",
      youtube: "https://youtube.com/your-demo",
    },
  ];

  return (
    <main
      className="flex-1 bg-[#CAECD5] dark:bg-[#141414] text-black dark:text-white 
      p-6 m-10 rounded-tr-2xl rounded-2xl
      max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 
      scrollbar-track-gray-300 dark:scrollbar-thumb-[#95F187] 
      dark:scrollbar-track-gray-700 scroll-smooth"
    >
       <section id="home" className="flex flex-col items-center">
      <div className="flex items-center gap-2  p-4 font-orbitron ">
      <FaCubes className="text-3xl text-gray-500/80" />
      <span className="text-3xl font-bold text-gray-500/80">Take a look at</span>
    </div>
    <span className=''>
            <span className="text-3xl text-gray-900 font-orbitron dark:text-white font-bold  ">My</span>
            <span className=" text-3xl text-[#4AA57B] font-orbitron font-bold dark:text-[#95F187]"> Portfolio</span>
          </span>
        

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative dark:bg-[#1A1A1B] bg-[#84D0A4]/20 p-6 rounded-xl "
            >
              {/* Image en haut à droite */}
              <div className="absolute -top-4 right-0 w-12 h-12  ring-8 border-n dark:ring-[#1A1A1B] ring-[#84D0A4]/20  rounded-full ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-12 h-12 object-contain rounded-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold dark:text-green-400 text-[#4AA57B] mb-2 mt-5 font-montserrat tracking-wider  ">
                {project.title}
              </h3>

              {/* Description */}
              <p className="dark:text-gray-300 text-sm mb-4 text-gray-700 font-montserrat">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-16">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="dark:bg-gray-800 dark:text-green-400 bg-[#707B77]/10 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer avec liens */}
              <div className="absolute bottom-4 left-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-green-500 text-green-400 hover:text-white transition"
                >
                  <FaGithub size={14} />
                </a>
              </div>
              <div className="absolute bottom-4 right-6">
                <a
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full  hover:bg-red-500 ring-1 ring-gray-50/40 dark:text-white text-black hover:text-white transition"
                >
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsSec;
