import React from 'react'
import SkillCard from '../SkillCard'
import { FaJs, FaDocker, FaGithub, FaAws, FaLinux,FaJava, FaServer, FaCode, FaReact,FaCubes  } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiKubernetes, SiOracle, SiCplusplus, SiC, SiTailwindcss } from "react-icons/si";
const langs = [
  {
    name: "French",
    level: "Fluent",
    description: "Fluent in French; confident in all professional settings.",
    flag: "https://flagcdn.com/w40/fr.png",
    percent: 95,
    color: "bg-blue-500",
  },
  {
    name: "English",
    level: "Advanced Intermediate",
    description: "Advanced intermediate level in spoken and written English.",
    flag: "https://flagcdn.com/w40/us.png",
    percent: 75,
    color: "bg-red-500",
  },
  {
    name: "Arabic",
    level: "Native",
    description: "Native speaker of Arabic.",
    flag: "https://flagcdn.com/w40/ma.png",
    percent: 100,
    color: "bg-green-600",
  },
];
const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-[#E76F00]" />, level: 90 }, // Orange Java
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-[#F7DF1E]" />, level: 85 }, // Jaune JS
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, level: 70 }, // Bleu foncé
      { name: "C", icon: <SiC className="text-[#A8B9CC]" />, level: 70 }, // Bleu gris
      { name: "CSS3 / HTML5", level: 90 },
      { name: "PL/SQL", level: 75 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" />, level: 85 }, // Vert Spring
      { name: "ReactJS", icon: <FaReact className="text-[#61DBFB]" />, level: 85 }, // Bleu React
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" />, level: 90 }, // Bleu Tailwind
      { name: "JavaFX", level: 70 },
      { name: "Scene Builder", level: 65 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Oracle", icon: <SiOracle className="text-[#F80000]" />, level: 75 }, // Rouge Oracle
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 80 }, // Vert Mongo
      { name: "Cassandra", level: 65 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, level: 80 }, // Bleu Docker
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" />, level: 65 }, // Bleu Kubernetes
      { name: "Git / GitHub", icon: <FaGithub className="text-white" />, level: 85 }, // Blanc GitHub
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" />, level: 60 }, // Orange AWS
    ],
  },
  {
    title: "Tools & IDEs",
    skills: [
      { name: "Visual Studio", level: 70 },
      { name: "IntelliJ IDEA", level: 85 },
      { name: "Linux (Shell)", icon: <FaLinux className="text-[#FCC624]" />, level: 80 }, // Jaune Linux
      { name: "Excel", level: 65 },
    ],
  },
];

function SkillsSec() {
  const skills = [
    {
      title: "Java Development",
      image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      icon: <FaJava size={40} />,
      description:
        "Experienced in building robust backend applications, APIs, and enterprise systems with Java & Spring Boot."
    },
    {
      title: "DevOps",
      image: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
      icon: <FaServer size={40} />,
      description:
        "Skilled in CI/CD pipelines, Docker, Kubernetes, and cloud deployment strategies for scalable applications."
    },
    {
      title: "Back-End Development",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      icon: <FaCode size={40} />,
      description:
        "Expert in designing APIs, managing databases, and ensuring secure and efficient server-side logic."
    },
    {
      title: "Front-End Development",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      icon: <FaReact size={40} />,
      description:
        "Proficient in building interactive and responsive user interfaces using React, TailwindCSS, and modern frontend tools."
    }
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
            <span className="text-3xl text-gray-900 font-orbitron dark:text-white font-bold  ">My Skills</span>
            <span className=" text-3xl text-[#4AA57B] font-orbitron font-bold dark:text-[#95F187]"> Set</span>
          </span>
          <div className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          title={skill.title}
          image={skill.image}
          icon={skill.icon}
          description={skill.description}
        />
      ))}
    </div>

          </section>
          <section id="SectionSkills">
          <div className="p-8 mt-10">
      {categories.map((cat, i) => (
        <div key={i} className="mb-8">
         <div className="items-start border-l-4 border-green-700  tracking-wider flex gap-x-4 pl-4">
      
      <span className="font-medium text-2xl   font-orbitron dark:text-white">{cat.title}</span>
    </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-10">
            {cat.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                {skill.icon && <div className="text-5xl">{skill.icon}</div>}
                <div className="w-full">
                  <div className="flex justify-between text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-full">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

    
    </div>

          </section>
          <section id="SectionsLangs">
          <div className="p-8">
          <div className="items-start border-l-4 border-green-700  tracking-wider flex gap-x-4 pl-4">
      
      <span className="font-medium text-2xl   font-orbitron dark:text-white">Langages</span>
    </div>

      {/* Liste avec drapeaux */}
      <div className="space-y-6 mt-5">
        {langs.map((lang, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            {/* Cercle avec drapeau */}
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-500 shadow-md">
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texte */}
            <div>
              <h3 className="text-lg font-semibold dark:text-white text-black font-montserrat">
                {lang.name} – <span className="dark:text-gray-300 text-green-700 font-montserrat">{lang.level}</span>
              </h3>
              <p className="text-sm dark:text-gray-400 text-black/70 font-montserrat">{lang.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Résumé avec barres */}
  
    </div>
          </section>

      </main>


  )
}

export default SkillsSec