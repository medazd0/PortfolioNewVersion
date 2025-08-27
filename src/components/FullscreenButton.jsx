import { useState, useEffect } from "react";
import { FaExpand, FaCompress } from "react-icons/fa";
import gsap from 'gsap'
function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFirstClick = async () => {
      try {
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
          setIsFullscreen(true);
        }
      } catch (err) {
        console.log("Fullscreen bloqué :", err);
      }
      document.removeEventListener("click", handleFirstClick);
    };

    // écoute premier clic
    document.addEventListener("click", handleFirstClick);

    return () => document.removeEventListener("click", handleFirstClick);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <button
    onMouseEnter={()=>{gsap.to("#cursor",{scale:2.5 ,duration:0.3 ,backgroundColor: "rgba(163, 222, 182, 0.6)" , opacity:0.8, ease: "power3.out"})}}
    onMouseLeave={()=>{gsap.to("#cursor",{scale:1 ,duration:0.3})}}
      onClick={toggleFullscreen}
      className="fixed top-1 right-1 bg-black/40 dark:bg-[#95F187] text-white text-2xl dark:text-black 
                 dark:hover:bg-[#87d27b]/90 p-5 rounded-full shadow-lg hover:bg-[#87d27b] transition z-50"
    >
      {isFullscreen ? <FaCompress /> : <FaExpand />}
    </button>
  );
}

export default FullscreenButton;
