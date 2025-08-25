import gsap from 'gsap'
export default function SkillCard({ title, image, icon, description }) {

  
  return (
    <div className="group [perspective:1000px] w-64 h-80 m-4">
      <div 
      onMouseEnter={()=>{gsap.to("#cursor",{scale:3,duration:0.3, backgroundColor: ""})}}
      onMouseLeave={()=>{gsap.to("#cursor",{scale:1,duration:0.3, backgroundColor: "",})}}
       className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Front side */}
        <div className="absolute inset-0 bg-[#1A1A1B]/10  dark:bg-[#1A1A1B] rounded-2xl shadow-2xl  dark:shadow-[#95F187] flex flex-col items-center justify-center [backface-visibility:hidden]">
          {image ? (
            <img src={image} alt={title} className="w-20 h-20" />
          ) : (
            icon
          )}
          <h3 className="mt-4 text-sm tracking-widest font-bold font-orbitron  text-black/70 dark:text-gray-300">{title}</h3>
        </div>

        {/* Back side */}
        <div className="absolute inset-0  bg-[#95F187]/30 dark:bg-[#95F187]  dark:text-black  text-black rounded-2xl shadow-xl flex flex-col items-center justify-center px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {icon}
          <h3 className="mt-3 text-xl font-bold font-montserrat">{title}</h3>
          <p className="mt-2 text-center text-sm font-montserrat">{description}</p>
        </div>

      </div>
    </div>
  );
}
