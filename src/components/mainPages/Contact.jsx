import React from "react";
import { FaEdit ,FaCubes} from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLinkedin, FaXTwitter, FaPaperPlane,FaUser } from "react-icons/fa6";
import gsap from 'gsap'

function Contact() {

  const contacts = [
    {
      title: "Phone",
      value: "+212607848253",
      icon: <FaPhone size={20} />,
      link: "tel:+212607848253", // lien tel
    },
    {
      title: "E-mail",
      value: "m.azoud01@gmail.com",
      icon: <FaEnvelope size={20} />,
      link: "mailto:m.azoud01@gmail.com", // lien mail
    },
    {
      title: "LinkedIn",
      value: "@Mohamed Azoud",
      icon: <FaLinkedin size={20} />,
      link: "https://linkedin.com/in/mohamed-azoud", // lien linkedin
    },
    {
      title: "Twitter",
      value: "@Med_Azoud",
      icon: <FaXTwitter size={20} />,
      link: "https://twitter.com/Med_Azoud", // lien twitter
    },
  ];
  return (
    <main className="flex-1 bg-[#CAECD5] dark:bg-[#141414] text-black dark:text-white 
    p-10 m-10 rounded-tr-2xl rounded-2xl
    max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-300 dark:scrollbar-thumb-[#95F187] dark:scrollbar-track-gray-700 scroll-smooth scrollbar-hover:">
     
     <section id="home" className="flex flex-col items-center">
     <div className="flex items-center gap-2  p-4 font-orbitron ">
      <FaCubes className="text-3xl text-gray-500/80" />
      <span className="text-3xl font-bold text-gray-500/80">Don't hesite to</span>
    </div>
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-green-700 dark:text-[#95F187] mb-12 font-orbitron">
        Contact <span className="text-black dark:text-white">Me</span>
      </h2>
      <div className="  min-w-full border-l-4 border-green-700   mb-8 tracking-wider flex gap-x-4 pl-4">
      <span className="font-medium text-2xl  font-orbitron text-green-700 dark:text-[#95F187]  ">send me a</span>
      <span className="font-medium text-2xl   font-orbitron dark:text-white">message</span>
    </div>

      {/* Form */}
      <div className="w-full x">
        <div className="grid md:grid-cols-2 gap-6 mb-10 font-montserrat">
          {/* Left form fields */}
          <div className="space-y-7">
            {/* Name */}
            <div className="flex items-center   rounded-md overflow-hidden">
              <span className="p-5 text-white bg-[#288D63] dark:bg-[#373939]">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-4 outline-none bg-[#C4E2CA] dark:bg-[#1A1A1B] text-black dark:text-white"
              />
            </div>

            {/* Email */}
            <div className="flex items-center   rounded-md overflow-hidden">
              <span className="p-5 text-white bg-[#288D63] dark:bg-[#373939]">
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-4 outline-none bg-[#C4E2CA] dark:bg-[#1A1A1B] text-black dark:text-white"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center   rounded-md overflow-hidden">
              <span className="p-5 text-white bg-[#288D63] dark:bg-[#373939]">
                <FaEdit />
              </span>
              <input
                type="text"
                placeholder="Subject*"
                className="w-full p-4 outline-none bg-[#C4E2CA] dark:bg-[#1A1A1B] text-black dark:text-white"
              />
            </div>
          </div>

          {/* Right message */}
          <textarea
            placeholder="Message*"
            rows="8"
            className="w-full p-3 rounded-md outline-none bg-[#C4E2CA] dark:bg-[#1A1A1B] text-black dark:text-white"
          />
        </div>

        {/* Send button */}
        <div className="text-center mb-12">
          <button
            onMouseEnter={()=>{gsap.to("#cursor",{scale:2.5 ,duration:0.3})}}
            onMouseLeave={()=>{gsap.to("#cursor",{scale:1 ,duration:0.3})}}
            type="submit"
            className="flex items-center justify-center gap-2 mx-auto px-6 py-3 rounded-full bg-[#288D63] dark:bg-[#95F187] dark:hover:bg-[#58d182] text-white hover:bg-[#56d39f] dark:text-black font-montserrat transition"
          >
            <FaPaperPlane /> SEND MESSAGE
          </button>
        </div>

        {/* Alternative contact */}
        <div className="  min-w-full border-l-4 border-green-700   mb-8 tracking-wider flex gap-x-4 pl-4">
      <span className="font-medium text-2xl  font-orbitron text-green-700 dark:text-[#95F187]  ">or if you</span>
      <span className="font-medium text-2xl   font-orbitron dark:text-white">prefer....</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="relative flex items-center gap-4 p-5 dark:bg-[#1A1A1B] rounded-xl shadow"
        >
          {/* Icône principale */}
          <span className="p-4 dark:bg-[#070707] ring-4 ring-gray-500/10 text-gray-500 dark:text-white rounded-full">
            {contact.icon}
          </span>

          {/* Texte */}
          <div>
            <h4 className="font-bold text-gray-700 dark:text-white font-orbitron">
              {contact.title}
            </h4>
            <p className="text-[#288D63] font-semibold dark:text-gray-400 font-montserrat">
              {contact.value}
            </p>
          </div>

          {/* Icône lien (en bas à droite) */}
         
                    <a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 flex items-center gap-1 text-[#288D63] hover:text-green-500 dark:text-[#95F187] dark:hover:text-green-500 group"
          >
            {contact.icon}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ➔
            </span>
          </a>

        </div>
      ))}
    </div>
      </div>
    </section>
    </main>
  );
}

export default Contact;
