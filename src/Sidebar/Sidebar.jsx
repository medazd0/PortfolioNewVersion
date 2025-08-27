import React, { useState, useEffect } from "react";
import Me from '../Profile/Me.png'
import { NavLink } from "react-router-dom";
import {
  FaChevronLeft, FaChevronRight, FaChevronDown, FaUser, FaGraduationCap,
  FaCode, FaBriefcase, FaImage, FaTrophy, FaNewspaper, FaEnvelope, FaLaptopCode, FaMoon
} from "react-icons/fa";
import { FaSun, FaWandMagicSparkles } from "react-icons/fa6";
import gsap from "gsap";

function Sidebar({ darkMode, setDarkMode, cursorEnabled, setCursorEnabled }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("a");
    const handleEnter = () => gsap.to("#cursor", { scale: 2, duration: 0.5, ease: "power3.out" });
    const handleLeave = () => gsap.to("#cursor", { scale: 1, duration: 0.5, ease: "power3.out" });
    links.forEach((l) => { l.addEventListener("mouseenter", handleEnter); l.addEventListener("mouseleave", handleLeave); });
    return () => links.forEach((l) => { l.removeEventListener("mouseenter", handleEnter); l.removeEventListener("mouseleave", handleLeave); });
  }, []);

  const base =
    `group flex items-center rounded-md transition-all duration-200 hover:text-green-700 dark:hover:text-green-300 ` +
    `${collapsed ? "w-full flex justify-center" : "gap-2 p-2"}`;
  const active =
    "bg-green-100 dark:bg-gray-200/20 text-green-600 dark:text-green-300 border-r-4 border-green-200";
  const linkClass = ({ isActive }) => `${base} ${isActive ? active : ""}`;

  return (
    <aside className={`m-3 bg-[#CAECD5] dark:bg-[#141414]/90 p-4 transition-all duration-300 flex flex-col rounded-xl relative ${collapsed ? "w-40" : "w-80"}`}>
      {/* header raccourci */}
      <div className="w-full max-w-sm mx-auto text-center">
        <div className="relative inline-block group">
          <img
            src={Me}
            alt="Profile"
            className={`w-32 h-32 object-cover rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg mx-auto border-4 border-green-200 ${collapsed ? "w-24 h-24" : ""}`}
          />

          {/* Status disponible */}
          {/* Status avec effet wave */}
          <span className="absolute bottom-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-gray-100"></span>
          </span>

          {/* Tooltip "Available" */}
          <span className="absolute bottom-10 left-20 font-montserrat scale-0 group-hover:scale-100 transition-transform 
                bg-[#373939] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            ✅ Available for new project
          </span>

        </div>

        {!collapsed && (
          <div className="mt-4">
            <div className="flex justify-center items-center gap-2 text-xl font-bold text-gray-800">
              <FaLaptopCode className="text-green-700 dark:text-green-400" />
              <span>
                <span className="text-2xl text-gray-900 font-orbitron dark:text-gray-400">Mohamed</span>
                <span className="text-green-400 font-orbitron"> Azoud</span>
              </span>
            </div>
            <p className="text-sm text-gray-900 mt-2 font-orbitron dark:text-gray-400">Web Developer</p>
          </div>
        )}
      </div>

      {/* bouton collapse */}
      <div className={`flex justify-center  w-12 h-12 ml-auto absolute top-28 -right-7 bg-green-100 border border-white rounded-full ${collapsed ? "h-9 w-9 -right-5" : ""}`}>
        <button
          onMouseEnter={() => { gsap.to("#cursor", { scale: 2.5, duration: 0.3, backgroundColor: "rgba(163, 222, 182, 0.6)", opacity: 0.8, ease: "power3.out" }) }}

          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
          onClick={() => setCollapsed(!collapsed)}
          className="text-green-800 hover:text-green-600"
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* NAVIGATION → NavLink vers les routes */}
      <nav className={`flex flex-col mt-5 font-medium text-green-900 dark:text-gray-500 ${collapsed ? "items-center gap-6" : ""}`}>
        <NavLink to="/" className={linkClass}>
          <FaUser className={`${collapsed ? "text-3xl group-hover:text-4xl" : "text-base group-hover:text-xl"}`} />
          {!collapsed && "About Me"}
        </NavLink>

        <NavLink to="/education" className={linkClass}>
          <FaGraduationCap className={`${collapsed ? "text-3xl group-hover:text-4xl" : "text-base group-hover:text-xl"}`} />
          {!collapsed && "Education"}
        </NavLink>

        <NavLink to="/skills" className={linkClass}>
          <FaCode className={`${collapsed ? "text-3xl group-hover:text-4xl" : "text-base group-hover:text-xl"}`} />
          {!collapsed && "Skills"}
        </NavLink>

        <NavLink to="/experience" className={linkClass}>
          <FaBriefcase className={`${collapsed ? "text-3xl group-hover:text-4xl" : "text-base group-hover:text-xl"}`} />
          {!collapsed && "Experience"}
        </NavLink>

        {/* Les autres liens si tu as des routes */}
        <NavLink to="/portfolio" className={linkClass}>
          <FaImage className={`${collapsed ? "text-3xl group-hover:text-4xl" : "text-base group-hover:text-xl"}`} />
          {!collapsed && "Portfolio"}
        </NavLink>

        <NavLink to="/achievement" className={linkClass}>
          <FaTrophy className={`${collapsed ? "text-3xl group-hover:text-4xl" : "text-base group-hover:text-xl"}`} />
          {!collapsed && "Achievement"}
        </NavLink>

        <NavLink to="/updates" className={linkClass}>
          <FaNewspaper className={`${collapsed ? "text-3xl group-hover:text-4xl" : "text-base group-hover:text-xl"}`} />
          {!collapsed && "Updates"}
        </NavLink>

        <NavLink to="/contact" className={linkClass}>
          <FaEnvelope className={`${collapsed ? "text-3xl group-hover:text-4xl" : "text-base group-hover:text-xl"}`} />
          {!collapsed && "Contact"}
        </NavLink>
      </nav>

      {/* footer raccourci */}
      <div className="flex flex-row items-end gap-8 cursor-pointer h-screen ">
        {/* Langue */}
        <div className="relative group flex items-center gap-1 hover:scale-110 transition-transform">
          <img
            src="https://flagcdn.com/us.svg"
            alt="Langue"
            className="w-6 h-6 rounded-full border border-white shadow"
          />
          <FaChevronDown className="text-sm text-gray-600" />

          {/* Tooltip */}
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform
                     bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            Change language
          </span>
        </div>

        {/* Dark Mode */}
        <div className="relative group">
          <button
            className="text-gray-500 hover:text-yellow-500 hover:scale-150 transition-all"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <FaMoon className="text-xl" />
            ) : (
              <FaSun className="text-xl" /> // ☀️ si dark mode activé
            )}
          </button>

          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform
                        text-white text-xs px-2 py-1 rounded-md whitespace-nowrap dark:bg-gray-50/30 bg-gray-950/20">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>

        {/* Magic Cursor */}
        <div className="relative group">
          <button
            onClick={() => setCursorEnabled(!cursorEnabled)}
            className="text-gray-500 hover:text-purple-600 hover:scale-150 transition-all"
          >
            <FaWandMagicSparkles className="text-xl" />
          </button>
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform
                     bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap font-montserrat dark:bg-gray-50/30 bg-gray-950/20 ">
            {cursorEnabled ? "Magic: On" : "Magic: Off"}
          </span>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;
