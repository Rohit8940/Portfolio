import { motion } from "framer-motion";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import myimage from "../assets/myimage.jpg"; // Ensure this path is correct

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update `isMobile` state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Text Section */}
      <div className={`absolute top-24 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4B00B1]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[Darkblue]">Rohit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center sm:text-left`}>
            Researcher at ISRO-SAC | MERN Stack | Artificial Intelligence
          </p>
        </div>
      </div>

      {/* Image Section - Ensures proper fitting */}
      <div className="absolute top-[65%] transform -translate-y-1/2 w-full flex justify-center z-20">
        <img
          src={myimage}
          alt="Hero"
          className="w-[80%] md:w-[50%] lg:w-[30%] rounded-lg object-cover shadow-lg max-h-[50vh]"
        />
      </div>

      {/* Moving Animation */}
      <div className="absolute bottom-4 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
