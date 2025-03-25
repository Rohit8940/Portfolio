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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4">
      {/* Text and Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-7xl">
        {/* Left Side - Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className={`${styles.heroHeadText} text-white break-words`}>
            Hi, I'm <span className="text-[Darkblue]">Rohit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 break-words`}>
            Researcher at ISRO-SAC | MERN Stack | Artificial Intelligence
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={myimage}
            alt="Hero"
            className="rounded-lg object-cover shadow-lg max-w-xs sm:max-w-sm md:max-w-md w-full"
          />
        </div>
      </div>

      {/* Moving Animation */}
      <div className="absolute bottom-4 w-full flex justify-center items-center">
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
