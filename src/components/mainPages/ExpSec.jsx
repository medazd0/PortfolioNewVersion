import React from 'react'
import { FaCubes  } from "react-icons/fa";
import admdi from "../../images/Admdi.jpeg"
import ade from "../../images/ADE.jpeg"
import gsap from 'gsap'
function ExpSec() {
  const experiences = [
    {
      title: "ADMDI | Internship",
      date: "Feb 2025 - May 2025",
      icon: admdi, // mets un logo si tu veux
      description:
        "Development and deployment of solutions including a Room Management System, a Jewelry Buying Platform, and a Biometric Student Attendance Tracking App using ZKTeco 9500.",
    },
    {
      title: "Head of Internal & External Relations | ADE",
      date: "Sep 2024 - Sep 2025",
      icon: ade, // logo ADE si dispo
      description:
        "Managed partnerships and secured sponsorships for ENSA Agadir Student Association (ADE).",
    },
  ];
  

  return (
    <main className="flex-1 bg-[#CAECD5] dark:bg-[#141414] text-black dark:text-white 
    p-6 m-10 rounded-tr-2xl rounded-2xl
    max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-300 dark:scrollbar-thumb-[#95F187] dark:scrollbar-track-gray-700 scroll-smooth scrollbar-hover:">
     
     <section id="home" className="flex flex-col items-center">
  <div className="flex items-center gap-2  p-4 font-orbitron ">
      <FaCubes className="text-3xl text-gray-500/80" />
      <span className="text-3xl font-bold text-gray-500/80">summary  of</span>
    </div>
    <span className=''>
            <span className="text-3xl text-gray-900 font-orbitron dark:text-white font-bold  ">My</span>
            <span className=" text-3xl text-[#4AA57B] font-orbitron font-bold dark:text-[#95F187]"> Experience</span>
          </span>
          <div className="relative  ml-20 mt-10">
  {experiences.map((item, index) => (
    <div
    onMouseEnter={()=>{gsap.to("#cursor",{scale:3,duration:0.3, backgroundColor: ""})}}
    onMouseLeave={()=>{gsap.to("#cursor",{scale:1,duration:0.3, backgroundColor: "",})}}
      key={index}
      className="mb-10 ml-20 p-6 rounded-xl dark:bg-[#1A1A1B] bg-[#94DAAD]/30"
    >
      {/* Timeline Dot */}
      <span className="absolute flex items-center justify-center w-20 h-20 bg-green-500 rounded-full -left-9 ring-1 ring-slate-300 overflow-hidden">
        {item.icon ? (
          <img
            src={item.icon}
            alt={item.title}
            className="w-screen h-screen object-contain"
          />
        ) : (
          <span className="text-white text-xl font-bold">
            {item.title.charAt(0)}
          </span>
        )}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold text-green-700 dark:text-[#95F187] font-orbitron tracking-wide mb-5">
        {item.title}
      </h3>

      {/* Date */}
      <div className="inline-block dark:bg-[#070707] bg-[#707B77] text-gray-300 font-montserrat text-sm font-semibold px-3 py-1 rounded-md mb-3">
        {item.date}
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-white font-montserrat">
        {item.description}
      </p>
    </div>
  ))}
</div>

    
  </section>

      </main>


  )
}

export default ExpSec