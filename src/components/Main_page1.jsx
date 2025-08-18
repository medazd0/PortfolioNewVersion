import React from 'react'
import { FaCubes } from "react-icons/fa";

function Main_page1() {
  return (
    <main className="flex-1 bg-[#CAECD5] dark:bg-[#141414] text-black dark:text-white p-6 m-5 rounded-lg flex flex-col justify-center items-center ">
      <section id="home" className="">
      <div className="flex items-center gap-2  p-4 font-orbitron ">
      <FaCubes className="text-3xl text-gray-500/80" />
      <span className="text-2xl font-bold text-gray-500/80">Hello...</span>
    </div>
    <span className=''>
            <span className="text-2xl text-gray-900 font-orbitron dark:text-gray-400 font-bold  ">I'm</span>
            <span className=" text-2xl text-green-400 font-orbitron font-bold"> Mohamed  Azoud</span>
          </span>
      </section>

      <section id="about" className="mb-8">
        
      </section>

      {/* Add more sections like Projects, Contact */}
    </main>
  )
}

export default Main_page1