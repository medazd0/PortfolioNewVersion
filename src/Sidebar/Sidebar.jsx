import React, { use, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaChevronDown ,FaUser, FaGraduationCap, FaCode, FaBriefcase, FaImage, FaTrophy, FaNewspaper, FaEnvelope ,FaLaptopCode} from 'react-icons/fa'
import { FaSun, FaWandMagicSparkles } from "react-icons/fa6";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeSection , setActiveSection]=useState('#about')
  const handleActiveSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  return (
    <aside className={`m-3  bg-green-50 p-4 transition-all duration-300 flex flex-col ${collapsed ? 'w-40' : 'w-80'}`}>
     <div className=" w-full max-w-sm mx-auto text-center ">
      
      {/* Image */}
      <div className="relative inline-block">
        <img
          src="/Profile/Me.jpeg"
          alt="Profile"
          className="w-32 h-32 object-cover rounded-2xl mx-auto border-4 border-green-200"
        />
        {/* Green status dot */}
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      {/* Name & Title */}
       {!collapsed && <div className="mt-4">
        <div className="flex justify-center items-center gap-2 text-xl font-bold text-gray-800">
          <FaLaptopCode className="text-green-700" />
          <span>
            <span className="text-black">Mohamed</span>{' '}
            <span className="text-green-400">Azoud</span>
          </span>
        </div>
        <p className="text-gray-600 mt-2">Web Developer</p>
      </div>}
      

    </div>
      <div>
      <nav className="flex flex-col justify-between h-full">
        
        
        {/* Toggle Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-green-800 hover:text-green-600"
          >
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>

    {/* Navigation */}
          <div className={`flex flex-col  mt-5 font-medium text-green-900 ${collapsed ? 'items-center gap-y-9' : ''}`}>

      <a
        href="#about"
        onClick={() => handleActiveSection('#about')}
        className={`group flex items-center rounded-md transition-all duration-200 hover:text-green-700 ${collapsed ? '' : 'gap-2 p-2'} ${activeSection === '#about' && !collapsed ? 'bg-green-100 text-green-700' : ''}`}
      >
        <FaUser className={`transition-all duration-300 ${collapsed ? 'text-2xl group-hover:text-4xl' : 'text-base group-hover:text-xl'}`} />
        {!collapsed && 'About Me'}
      </a>

      <a
        href="#education"
        onClick={() => handleActiveSection('#education')}
        className={`group flex items-center rounded-md transition-all duration-200 hover:text-green-700 ${collapsed ? '' : 'gap-2 p-2'} ${activeSection === '#education' ? 'bg-green-100 text-green-700' : ''}`}
      >
        <FaGraduationCap className={`transition-all duration-300 ${collapsed ? 'text-2xl group-hover:text-4xl' : 'text-base group-hover:text-xl'}`} />
        {!collapsed && 'Education'}
      </a>

      <a
        href="#skills"
        onClick={() => handleActiveSection('#skills')}
        className={`group flex items-center rounded-md transition-all duration-200 hover:text-green-700 ${collapsed ? '' : 'gap-2 p-2'} ${activeSection === '#skills' ? 'bg-green-100 text-green-700' : ''}`}
      >
        <FaCode className={`transition-all duration-300 ${collapsed ? 'text-2xl group-hover:text-4xl' : 'text-base group-hover:text-xl'}`} />
        {!collapsed && 'Skills'}
      </a>

      <a
        href="#experience"
        onClick={() => handleActiveSection('#experience')}
        className={`group flex items-center rounded-md transition-all duration-200 hover:text-green-700 ${collapsed ? '' : 'gap-2 p-2'} ${activeSection === '#experience' ? 'bg-green-100 text-green-700' : ''}`}
      >
        <FaBriefcase className={`transition-all duration-300 ${collapsed ? 'text-2xl group-hover:text-4xl' : 'text-base group-hover:text-xl'}`} />
        {!collapsed && 'Experience'}
      </a>

      <a
        href="#portfolio"
        onClick={() => handleActiveSection('#portfolio')}
        className={`group flex items-center rounded-md transition-all duration-200 hover:text-green-700 ${collapsed ? '' : 'gap-2 p-2'} ${activeSection === '#portfolio' ? 'bg-green-100 text-green-700' : ''}`}
      >
        <FaImage className={`transition-all duration-300 ${collapsed ? 'text-2xl group-hover:text-4xl' : 'text-base group-hover:text-xl'}`} />
        {!collapsed && 'Portfolio'}
      </a>

      <a
        href="#achievement"
        onClick={() => handleActiveSection('#achievement')}
        className={`group flex items-center rounded-md transition-all duration-200 hover:text-green-700 ${collapsed ? '' : 'gap-2 p-2'} ${activeSection === '#achievement' ? 'bg-green-100 text-green-700' : ''}`}
      >
        <FaTrophy className={`transition-all duration-300 ${collapsed ? 'text-2xl group-hover:text-4xl' : 'text-base group-hover:text-xl'}`} />
        {!collapsed && 'Achievement'}
      </a>

      <a
        href="#updates"
        onClick={() => handleActiveSection('#updates')}
        className={`group flex items-center rounded-md transition-all duration-200 hover:text-green-700 ${collapsed ? '' : 'gap-2 p-2'} ${activeSection === '#updates' ? 'bg-green-100 text-green-700' : ''}`}
      >
        <FaNewspaper className={`transition-all duration-300 ${collapsed ? 'text-2xl group-hover:text-4xl' : 'text-base group-hover:text-xl'}`} />
        {!collapsed && 'Updates'}
      </a>

      <a
        href="#contact"
        onClick={() => handleActiveSection('#contact')}
        className={`group flex items-center rounded-md transition-all duration-200 hover:text-green-700 ${collapsed ? '' : 'gap-2 p-2'} ${activeSection === '#contact' ? 'bg-green-100 text-green-700' : ''}`}
      >
        <FaEnvelope className={`transition-all duration-300 ${collapsed ? 'text-2xl group-hover:text-4xl' : 'text-base group-hover:text-xl'}`} />
        {!collapsed && 'Contact'}
      </a>

      </div>





       
        
      </nav>
      </div>
      <div className={` ${!collapsed ? 'flex justify-around items-center  p-4  max-w-xs mt-auto':'flex justify-around max-w-xs mt-auto'}  `}>
      
      {/* Sélecteur de langue */}
      <div className={`flex items-center gap-1 cursor-pointer hover:scale-110 transition-transform `}>
        <img
          src="https://flagcdn.com/us.svg"
          alt="Langue"
          className="w-6 h-6 rounded-full border border-white shadow"
        />
        <FaChevronDown className="text-sm text-gray-600" />
      </div>

      {/* Mode clair / sombre */}
      <button className="text-gray-500 hover:text-yellow-500 hover:scale-150 transition-all">
        <FaSun className="text-xl" />
      </button>

      {/* Outil magique */}
      <button className="text-gray-500 hover:text-purple-500 hover:scale-110 transition-all">
        <FaWandMagicSparkles className="text-xl" />
      </button>

    </div>
    
    </aside>
  )
}

export default Sidebar
