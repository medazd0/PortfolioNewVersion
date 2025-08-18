import React, { useEffect } from 'react'
import { gsap } from 'gsap'

function Cursor() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX -20/2,
        y: clientY -20/2,
        duration: 1,
        delay:0, // smooth movement
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="absolute z-10 top-0 left-0 w-[30px] h-[30px] bg-gray-400/10 dark:bg-white rounded-full pointer-events-none dark:mix-blend-difference"
    ></div>
  );
}

export default Cursor;
